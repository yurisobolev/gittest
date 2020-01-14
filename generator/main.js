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

        _data  = {
            images: []
        }

        div = $('<div></div>')

        loadBtn = $('<input id="loadBtn"  type="button" value="Загрузить"/>')

        loadForm = $('<form id="loadForm" action="file-handler.php" method="post" enctype="multipart/form-data"><label id="browse-btn" for="upload-photo">Выбрать файл</label><input style="display:none;" id="upload-photo" type="file" name="upload" /></form>')

        imagesBlock = $('<div id="imagesBlock"></div>')

        saveBtn = $('<input class="editBtn" style="position: absolute; display: block; outline: none;" type="button" value="Применить" />')

        imagesBlock.css({
            'position': 'relative',
            'width'   : '250px',
            'height'  : '300px',
            'background': 'transparent',
            'border'  : 'solid 1px #f57507',
            'margin'  : '10px',
            'overflow': 'auto',
            'border-radius' : '5px'

        });

        loadBtn.css({
            'display'    : 'block',
            'background' : 'transparent',
            'color'      : 'white',
            'margin-top' : '10px',
            'border'     : 'solid 1px #f57507',
            'border-radius' : '5px',
            'transition' : '0.3s',
            'outline'    : 'none'
        });

        div.css({
            'margin': '10px'
        });

        loadBtn.click(function(event) {
            var file_data = $('#loadForm')[0].elements[0].files[0];   
            var form_data = new FormData();                  
            form_data.append('upload', file_data);
            console.log(form_data, file_data)                           
                $.ajax({
                    url: 'file-handler.php', // point to server-side PHP script 
                    dataType: 'text',  // what to expect back from the PHP script, if anything
                    cache: false,
                    contentType: false,
                    processData: false,
                    data: form_data,                         
                    type: 'post',
                    success: function(php_script_response){
                        console.log(php_script_response); // display response from the PHP script, if any
                    }
                });
        });

        loadForm.css({
            'margin-top'  : '30px',
            'margin-left' : '10px'
        }); 

        loadForm.on('change', function(event) {

           editor.readAsUrl($(this)[0].elements[0].files, (src)=>{

              preview = $('<img src="'+src+'" />')

              _data.images.push(src)
              console.log(_data)

              preview.css({
                  'position': 'relative',
                  'float'   : 'left',
                  'width'   : '120px',
                  'height'  : '100px',
                  'margin'  : '10px',
                  'padding' : '2px',
                  'border'  : '1px solid white'
              });

              preview.appendTo(imagesBlock)

           })
        });

        saveBtn.click(function(event) {
            $('.owl-carousel').remove();
            editor.createSlider(generator.editWindowID, _data.images)
        });


        loadBtn.appendTo(loadForm)

        div.append(loadForm, imagesBlock, saveBtn)

        $('.editWindow').append(div)
    },

    createSlider: (parentID, images, callback) =>{
        var previewImage;

        id = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5))

        slider = $('<div style="opacity:0;" class="owl-carousel"></div>')
        if (images != undefined) {
            for (i in images) {
                src = images[i]
                previewImage = $('<img src="'+src+'" >');
                previewImage.css({
                'width' : '250',
                'height' : '220px'
            })
                slider.append(previewImage)
            }
        }
        else{
            previewImage = $('<img src="icons/picture.png" >')
            previewImage.css({
                'width' : '250',
                'height' : '220px'
            })
            slider.append(previewImage, previewImage.clone(), previewImage.clone())
        }


        slider.owlCarousel({
            items: 3,
            margin: 150
        });

        slider.css({
            'width' : 'initial',
            'height': '300',
            'border': '1px solid #f57507',
            'padding': '10px',
            'margin' : '20px' 
        });

        slider.on('refreshed.owl.carousel', function(event) {
            slider.css('opacity', '1');
            callback();
        });


        slider.dblclick(function() {
            editor.editBlock(this, 'slider')
        });

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
    editWindowID: '', 

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

            generator.editWindowID = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5));

            editWindowID = generator.editWindowID

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

            div = $('<div id="div_'+editWindowID+'">')

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
                addImage.attr('disabled', 'disabled');
                editor.createSlider(editWindowID, undefined, ()=>{
                    addImage.removeAttr('disabled');
                })
            })

            addText.click(function(event) {
                if (generator.textAreasCount > 0) {
                    alert('Превышен лимит текстовых блоков')
                }
                else if(generator.textAreasCount < 1){
                    generator.textAreasCount += 1
                    editor.createText(editWindowID)
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

