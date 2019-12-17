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


const editor = {
    createBlock: (parent) =>{
        block = $('<div id="block_' + (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)) + '"></div>')

        block.css({
            'position' : 'relative',
            'display'  : 'block',
            'border-radius' : '10px',
            'background'    : 'transparent',
            'border' : '1px solid #f57507',
            'margin' : '20px',
            'width'  : '100px',
            'height' : '50px'
        })

        parent.append(block)

        return block;
    },
    createImage: (parent) =>{
        id = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5))
        image = $('<img src="icons/picture.png" id="image_' + id + '">')

        image.css({
            'position' : 'absolute',
            'display' : 'block',
            'width' : '128px',
            'height': '128px',
            'margin': '20px',
            'touch-action' : 'none'
        })

        parent.append(image)
    },
    createText: (parent) =>{
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
        parent.append(textArea) 
    },
    editText: (id) =>{

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

            addImage.click(function(event) {
                editor.createImage(div)
            })

            addText.click(function(event) {
                if (generator.textAreasCount > 0) {
                    alert('Превышен лимит текстовых блоков')
                }
                else if(generator.textAreasCount < 1){
                    generator.textAreasCount += 1
                    editor.createText(div)
                }
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



function makeDraggble(el) {
    interact(el)
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      console.log('123')
    }
  })

function dragMoveListener (event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}
}
