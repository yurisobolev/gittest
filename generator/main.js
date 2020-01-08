jQuery(document).ready(($) => {

    var queue = {};

    $("#add-block").click(function(event) {
        generator.create ();
    });

    blockTemplate = $(document).find('.templateGid').clone()

})

var blockTemplate;


const editor = {
    slideOnEdit: 0,

    editBlock:(el, type) =>{
        $('.editWindow').empty()
        switch (type){
            case 'slider':
                editor.editSlider(el)
            case 'textArea':
                editor.editTextArea(el)
            case 'audio':
                editor.editAudio(el)
        }
    },
    editTextArea:(el) =>{

    },
    editAudio:() =>{

    },
    editSlider:(el) =>{

        div = $('<div></div>')

        imagesLabel = $('<p> Изображения </p>')

        addImageBtn = $('<form action="file-handler.php" method="post" enctype="multipart/form-data"><input type="file" name="myfile" /><input type="submit" /></form>')

        imagesBlock = $('<div></div>')

        imagesBlock.css({
            'position': 'relative',
            'width'   : '250px',
            'height'  : '200px',
            'background': 'transparent',
            'border'  : 'solid 1px #f57507',
            'margin'  : '10px',
            'overflow': 'auto'
        });

        addImageBtn.on('change', function(event) {
           editor.readAsUrl($(this)[0].elements[0].files, (src)=>{

              preview = $('<img src="'+src+'" />')

              preview.css({
                  'position': 'relative',
                  'float'   : 'left',
                  'width'   : '125px',
                  'height'  : '100px',
                  'margin'  : '10px'
              });

              preview.appendTo(imagesBlock)

           })
        });

        addImageBtn.css('margin', '10px'); 

        saveBtn = $('<input class="editBtn" style="position: absolute; display: block; outline: none;" type="button" value="Применить" />')

        imagesLabel.css({
            'position' : 'relative',
            'color' : 'white',
            'font-family' : 'sans-serif',
            'font-size'  : '25px',
            'margin' : '10px'
        })


        div.css({
            'margin': '10px'
        });

        div.append(imagesLabel, addImageBtn, imagesBlock, saveBtn)

        $('.editWindow').append(div)
    },

    createSlider: (parentID) =>{
        id = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5))

        slider = $('<div id="imgSlider_'+id+'"></div>')

        arrowRight = $('<i class="right"></i>') 
        arrowLeft  = $('<i class="left"></i>')

        slider.append(arrowRight)
        slider.append(arrowLeft)

        slider.attr('title', 'Редактирование двойным кликом');

        slider.css({
            'position' : 'absolute',
            'display' : 'block',
            'border':'solid 1px #f57507',
            'border-radius' : '10px',
            'width' : '450px',
            'height': '256px',
            'margin': '20px',
            'touch-action' : 'none',
            'transition' : '0.3s'
        })

        slider.dblclick(function() {
            editor.editBlock(this, 'slider')
        });

        slider.hover(function(){
            $(this).css({
                'border' : 'solid 3px wheat',
                'cursor' : 'pointer',
                'opacity' : '0.3'
            });
            }, function(){
            $(this).css({
                'border' : 'solid 1px #f57507',
                'cursor' : 'default',
                'opacity' : '1'

            });
        })

        $("#div_" + parentID).append(slider)
    },

    createText: (parentID) =>{
        id = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5))
        textArea = $('<textarea placeholder="Расскажите о экскурсии" id="textArea_' + id + '"></textarea>')

        textArea.css({
            'position':'absolute',
            'display' : 'block',
            'margin'  : '20px',
            'border-radius' : '10px',
            'resize' : 'none',
            'background' : 'transparent',
            'color' : 'white',
            'font-style' : 'sans-serif',
            'border-color' : '#f57507',
            'font-size' : '20px',
            'padding' : '10px',
            'outline' : 'none',
            'width' : '750px',
            'height' : '250px',
            'bottom' : '0'

        })

        console.log("textArea_" + id)
        $("#div_" + parentID).append(textArea) 
    },
    readAsUrl: (files, callback) =>{

        if (files && files[0]) {
            var reader = new FileReader();
    
            reader.onload = function(e) {
             callback(e.target.result)
        }
    
        reader.readAsDataURL(files[0]);
        }
    }
}











const generator = {

    count: 0,
    slides: [],
    textAreasCount : 0,

    create: () => {

        slide = {
            id : generator.count,
            textEl : [],
            audioEl : [],
            imageEl : []
        }

        blockTemplate.css('display', 'block');
        blockShowed = blockTemplate.clone();
        blockShowed.find('.slide_number').text('Слайд - ' + generator.count)
        blockShowed.find('.pick_slide').attr('data-slide', generator.count)
        $('.slideList').append(blockShowed);
        generator.count = generator.count + 1;
        generator.slides.push(slide)
        
        $(".pick_slide").click(function(event) {
            generator.createEditWindow(parseInt($(this).attr('data-slide')));
        });

        // $(".input-file").on('change', function() {
        //     var files = this.files;

        //     for (var i = 0; i < files.length; i++) {
        //         preview(files[i], $(this));
        //     }
        // });
    },

   createEditWindow: (slide_id) => {

            divID = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5));

            for (var i = 0; i < generator.slides.length; i++) {
                if (generator.slides[i].id == slide_id) {
                    editor.slideOnEdit = generator.slides[i]
                    break;
                }
                else{
                    console.log('Такого слайда не найдено!')
                }
            }

            overlayOn();
            $('#overlay').empty()

            div = $('<div id="div_'+divID+'">')

            editWindow = $('<div class="editWindow"></div>')

            addText = $('<input  class="editBtn"  type="button" value="Текст">')

            addImage = $('<input class="editBtn"  type="button" value="Изображения">')

            addAudio = $('<input class="editBtn"  type="button" value="Аудио">')

            exitBtn = $('<input class="exitBtn"  type="button" value="X">')

            exitBtn.click(function(event) {
                $('#overlay').empty()
                div.empty()
                overlayOff();
            });

            addAudio.click(function(event) {
                /*

                add audio code
                
                */
            })

            addImage.click(function(event) {
                editor.createSlider(divID)
            })

            addText.click(function(event) {
                if (generator.textAreasCount > 0) {
                    alert('Превышен лимит текстовых блоков')
                }
                else if(generator.textAreasCount < 1){
                    generator.textAreasCount += 1
                    editor.createText(divID)
                }
            })

             editWindow.css({
                 'position' : 'relative',
                 'display' : 'inline-block',
                 'border': '2px solid #f57507',
                 'border-radius': '10px',
                 'width': '400px',
                 'background' : 'transparent',
                 'margin-left' : '50px',
                 'margin-top' : '50px',
                 'height' : '80%',
                 'float'  : 'left',
                 'overflow': 'hidden'
             })

             div.css({
                 'position' : 'relative',
                 'display' : 'inline-block',
                 'border': '2px solid #f57507',
                 'border-radius': '10px',
                 'width': '70%',
                 'background' : 'transparent',
                 'margin-left' : '50px',
                 'margin-top' : '50px',
                 'height' : '80%',
                 'overflow': 'hidden'
             });

             div.append(addText, addImage, addAudio, exitBtn)

             $("#overlay").append(div, editWindow)
    }

    }

