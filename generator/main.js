jQuery(document).ready(($) =>{

     var queue = {};


    $("#add-block").click(function(event) {
        slide.create();
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

 const slide = {
    count: 0,
    create: () =>{
        blockTemplate.css('display', 'block');
        blockShowed = blockTemplate.clone();
        blockShowed.find('.input-file').attr('id', "slide_" + slide.count)
        blockShowed.find('label').attr('for', "slide_" + slide.count)
        $('.generator').append(blockShowed);
        slide.count = slide.count + 1;

        $(".input-file").on('change', function() {
            var files = this.files;

            for (var i = 0; i < files.length; i++) {
                preview(files[i], $(this));
            }
        });
    }
 }

