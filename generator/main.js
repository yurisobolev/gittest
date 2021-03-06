    $('.loader-overlay').show()

    jQuery(document).ready(($) => {

        $("#add-block").click(function(event) {
            generator.create ();
        });

        blockTemplate = $(document).find('.templateGid').clone()

        $('.loader-overlay').hide()

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

        backgroundColorArea = $('<div class="optionsArea">')

        textColorArea = $('<div class="optionsArea">')

        fontSizeArea = $('<div class="optionsArea">')

        backgroundColorArea.append('<p class="optionTitle">Цвет фона текста</p>')
        textColorArea.append('<p class="optionTitle">Цвет текста</p>')

        backgroundColorArea.append($('<div class="background_picker">'))
        textColorArea.append($('<div class="text_picker">'))

        $('.editWindow').append(backgroundColorArea, textColorArea, fontSizeArea)

        const background_picker = Pickr.create({
            el: '.background_picker',
            theme: 'nano', // or 'monolith', or 'nano'

            swatches: null,

            components: {

                // Main components
                preview: true,
                opacity: true,
                hue: true,

                // Input / output Options
                interaction: {
                    input: true,
                    hex: true,
                    rgba: true,
                    save : true,
                    clear: true
                }
            }
        });

        const text_picker = Pickr.create({
            el: '.text_picker',
            theme: 'nano', // or 'monolith', or 'nano'

            swatches: null,

            components: {

                // Main components
                preview: true,
                opacity: true,
                hue: true,

                // Input / output Options
                interaction: {
                    input: true,
                    hex: true,
                    rgba: true,
                    save : true,
                    clear: true
                }
            }
        });


        $('.pickr').css('display', 'inline-block');



    },
    editAudio:() =>{

    },
    takePhotos:(callback) =>{

        _data  = {
            images: []
        }

        div = $('<div></div>')

        loadBtn = $('<input id="loadBtn"  type="button" value="Загрузить"/>')

        loadForm = $('<form id="loadForm" action="file-handler.php" method="post" enctype="multipart/form-data"><label id="browse-btn" for="upload-photo">Выбрать файл</label><input style="display:none;" id="upload-photo" type="file" name="upload" /></form>')

        imagesBlock = $('<div id="imagesBlock"></div>')

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

        loadForm.on('change', function(event) {
            var file_data = $('#loadForm')[0].elements[0].files[0];   
            var form_data = new FormData();                  
            form_data.append('upload', file_data);                           
                $.ajax({
                    url: 'file-handler.php', 
                    dataType: 'text',  
                    cache: false,
                    contentType: false,
                    processData: false,
                    data: form_data,                         
                    type: 'post',
                    success: function(php_script_response){

                            if (php_script_response === "Размер изображения не должен превышать 5 Мбайт.") {
                                alert(php_script_response)
                            }
                            else if(php_script_response === "Высота изображения не должна превышать 768 точек."){
                                alert(php_script_response)
                            }
                            else if(php_script_response === "Ширина изображения не должна превышать 1280 точек."){
                                alert(php_script_response)
                            }
                            else if ( JSON.parse(php_script_response).url != undefined) {

                              url = JSON.parse(php_script_response).url
                              preview = $('<img src="'+url+'" />')
                              preview.css({
                                  'position': 'relative',
                                  'float'   : 'left',
                                  'width'   : '120px',
                                  'height'  : '100px',
                                  'margin'  : '10px',
                                  'padding' : '2px',
                                  'border'  : '1px solid white'
                              });

                              callback(url)
                              preview.appendTo(imagesBlock)

                            }
                    }
                });
        });

        loadForm.css({
            'margin-top'  : '30px',
            'margin-left' : '10px'
        }); 

        loadBtn.appendTo(loadForm)

        div.append(loadForm, imagesBlock)

        $('.editWindow').append(div)
    },

    setBackground: (parentID, images) =>{

        if (images === undefined) {
            $('#div_' + parentID).css({
                'opacity' : '0.5'
            })
            $('.editBtn').prop( "disabled", true );

            editor.takePhotos((response)=>{

                editor.slideOnEdit.backgroundUrl = response
                img = $('<img src="'+response+'"/>')
                img.css({
                    'position' : 'absolute',
                    'left'     : '0',
                    'width'    : '100%',
                    'height'   : '100%',
                    'z-index'  : '-1'
                })

                $('#div_' + parentID).append(img)

<<<<<<< HEAD
        editor.takePhotos((_data)=>{
            $("#div_" + parentID).css({
                'background-image' : 'url("'+_data.images[0]+'")',
                'background-repeat' : 'no-repeat',
                'background-size'   : 'contain'
            });
            $('#div_' + parentID).css({
            'opacity' : '1'
            })
            $('.editBtn').prop( "disabled", false );
            $('.editWindow').empty()
        })
=======
                $('#div_' + parentID).css({
                'opacity' : '1'
                })
                $('.editBtn').prop( "disabled", false );
                $('.editWindow').empty()
            })
        }
        else{
            url = images[0]
            editor.slideOnEdit.backgroundUrl = images[0]
            img = $('<img src="'+images[0]+'"/>')
            img.css({
                'position' : 'absolute',
                'left'     : '0',
                'width'    : '100%',
                'height'   : '100%',
                'z-index'  : '-1'
            })
            $('#div_' + parentID).append(img)
        }
>>>>>>> 955529836a23f8a65eeb9ab18bc036d269b14eb2

    },

    createText: (parentID, value, background, textColor) =>{

        id = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5))

<<<<<<< HEAD
=======
        textAreaObject = {
            value: value,
            background: background,
            textColor : textColor
        }

        textArea = $('<textarea placeholder="Расскажите о экскурсии" id="textArea_' + id + '">'+value+'</textarea>')

>>>>>>> 955529836a23f8a65eeb9ab18bc036d269b14eb2
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
            'bottom' : '0',
            'color'  : textColor

        })

        textArea.dblclick(function(event) {
            editor.editBlock(textArea, 'textArea')
        });

<<<<<<< HEAD
        $("#div_" + parentID).append(textArea) 
    },
=======
        if (editor.slideOnEdit.textEl.length > 0) {
            console.log('Текст уже есть')
            $("#div_" + parentID).append(textArea) 
        }
        else if(editor.slideOnEdit.textEl.length < 1){
            $("#div_" + parentID).append(textArea) 
            editor.slideOnEdit.textEl.push(textAreaObject)
        }

        $("#div_" + parentID).append(textArea) 
    },
    saveSlide(){

        index = editor.getSlideIndex(editor.slideOnEdit.id)

        editor.slideOnEdit.textEl[0].value = $('textarea')[0].value
    
    },
    loadSlide(slide_id){

        this.setBackground(generator.editWindowID, [editor.slideOnEdit.backgroundUrl])

        textElements = editor.slideOnEdit.textEl

        if (textElements.length > 0) {

            value = textElements[0].value

            background = textElements[0].background

            textColor = textElements[0].textColor

            this.createText(generator.editWindowID, value, background, textColor)
        }

        console.log('Слайд '+editor.slideOnEdit.id+' загружен')
    },

    getSlideIndex(slide_id){

        for (var i = 0; i <= generator.slides.length; i++) {
            if (generator.slides[i].id === slide_id){
                return i
                break
            }
            else{
                continue
                console.log('Такого слайда не найдено')
            }
        }
        return false
    },

>>>>>>> 955529836a23f8a65eeb9ab18bc036d269b14eb2
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

    },

   createEditWindow: (slide_id) => {


            generator.editWindowID = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5));

            editWindowID = generator.editWindowID

            editor.slideOnEdit = generator.slides[editor.getSlideIndex(slide_id)]

            overlayOn();
            $('#overlay').empty()

            div = $('<div id="div_'+editWindowID+'">')

            editWindow = $('<div class="editWindow"></div>')

            addText = $('<input  class="editBtn"  type="button" value="Текст">')

            addBackground = $('<input class="editBtn"  type="button" value="Фон">')

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

            addBackground.click(function(event) {
                addBackground.attr('disabled', 'disabled');
                editor.setBackground(editWindowID)
            })

            addText.click(function(event) {
                if (editor.slideOnEdit.textEl.length > 0) {
                    alert('Превышен лимит текстовых блоков')
                }
                else if(editor.slideOnEdit.textEl.length < 1){
                    editor.createText(editWindowID, '', 'icons/default_background.jpg', 'white')
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

             div.append(addText, addBackground, addAudio, exitBtn)

             div.ready(function() {
                 $("#overlay").append(div, editWindow)
                 editor.loadSlide(slide_id)
                 $('.loader-overlay').css('display', 'none'); 
             });
             $('.loader-overlay').css('display', 'block');
    },

    saveGid: () => {

        main = {
            name: $('.mainOptions')[0].value,
            discription: $('.mainOptions')[1].value,
        }

        data = {
            slides: generator.slides,
            tags: ''
        }

        var form_data = new FormData();
        form_data.append('main', JSON.stringify(main));
        form_data.append('data', JSON.stringify(data))

        $.ajax({
            url: 'save-gid.php', 
            dataType: 'text',  
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,                         
            type: 'post',
            success: function(php_script_response){
                    console.log(php_script_response)
                    if (php_script_response === "code: 0") {
                        alert('Экскурсия не была загружена! \n Вы не назвали экскурсиию')
                    }
                    else if(php_script_response === "code: 1"){
                        alert('Экскурсия не была загружена! \n Вы не написали описание')
                    }
                    else if(php_script_response === "code: 2"){
                        alert('Экскурсия не была загружена! \n Название содержит более 30 знаков')
                    }
                    else if(php_script_response === "code: 3"){
                        alert('Экскурсия не была загружена! \n Описание содержит более 120 знаков')
                    }
                    else if (php_script_response === "code: 4") {
                        alert('Экскурсия успешно сохранена и загружена')
                    }
            }
        });
    }

    }

