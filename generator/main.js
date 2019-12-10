jQuery(document).ready(($) => {

    var queue = {};

    $("#add-block").click(function(event) {
        generator.create();
    });

    blockTemplate = $(document).find('.templateGid').clone()

})

function preview(file, el) {
    var reader = new FileReader();
    reader.addEventListener('load', function(event) {
        var img = document.createElement('img');
        $(el.parents()[2]).find('img').attr('src', event.target.result);

    });
    reader.readAsDataURL(file);
}

var blockTemplate;


const edior = {
    createText: (parent) =>{
        textArea = $('<textarea id="textArea_' + (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)) + '"></textarea>')

        textArea.css({
            'position':'absolute',
            'resize': 'none',
            'display': 'inline-block',
            'vertical-align': 'bottom',
            'border': '1px solid #ccc',
            'bottom': '0',
            'height': '200px',
            'width' : '100%'
        })

        parent.append(textArea) 
    },
    editText: (id) =>{

    }
}

const generator = {

    count: 0,
    slides: [],

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
            generator.edit($(this).attr('data-slide'));
        });

        $(".input-file").on('change', function() {
            var files = this.files;

            for (var i = 0; i < files.length; i++) {
                preview(files[i], $(this));
            }
        });
    },

    edit: (id) => {

            overlayOn();
            $('#overlay').empty()

            div = $('<div>')

            addText = $('<input  class="editBtn"  type="button" value="Текст">')

            addImage = $('<input class="editBtn"  type="button" value="Изображение">')

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

            addText.click(function(event) {
                edior.createText(div)
            })

             div.css({
                 'position' : 'relative',
                 'border': '2px solid #f57507',
                 'border-radius': '10px',
                 'width': '70%',
                 'background' : 'transparent',
                 'margin-left' : '14%',
                 'margin-top' : '50px',
                 'height' : '80%',
                 'overflow': 'hidden'
             });

             // editBtn.css({
             //     'margin': '10px',
             //     'border-radius': '10px'
             // });
             div.append(addText, addImage, addAudio, exitBtn)

             $("#overlay").append(div)
    }

    }