        
        
        // Menu Hamberger
        let arrow = document.querySelectorAll(".arrow");
            for (var i = 0; i < arrow.length; i++) {
                arrow[i].addEventListener("click", (e)=>{
            let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
            arrowParent.classList.toggle("showMenu");
                });
            }
            let sidebar = document.querySelector(".sidebar");
            let sidebarBtn = document.querySelector(".bx-menu");
            console.log(sidebarBtn);
            sidebarBtn.addEventListener("click", ()=>{
                sidebar.classList.toggle("close");
            });
    
    // -----JS DE LA PAGE INFO------

        //Ajouter une Image

        jQuery(document).ready(function () {
            ImgUpload();
          });
  
          function ImgUpload() {
            var imgWrap = "";
            var imgArray = [];
  
            $('.upload__inputfile').each(function () {
              $(this).on('change', function (e) {
                imgWrap = $(this).closest('.upload__box').find('.upload__img-wrap');
                var maxLength = $(this).attr('data-max_length');
  
                var files = e.target.files;
                var filesArr = Array.prototype.slice.call(files);
                var iterator = 0;
                filesArr.forEach(function (f, index) {
  
                  if (!f.type.match('image.*')) {
                    return;
                  }
  
                  if (imgArray.length > maxLength) {
                    return false
                  } else {
                    var len = 0;
                    for (var i = 0; i < imgArray.length; i++) {
                      if (imgArray[i] !== undefined) {
                        len++;
                      }
                    }
                    if (len > maxLength) {
                      return false;
                    } else {
                      imgArray.push(f);
  
                      var reader = new FileReader();
                      reader.onload = function (e) {
                        var html = "<div class='upload__img-box mx-1 btn-shadow border-r'><div style='background-image: url(" + e.target.result + ")' data-number='" + $(".upload__img-close").length + "' data-file='" + f.name + "' class='img-bg'><div class='upload__img-close'></div></div></div>";
                        imgWrap.append(html);
                        iterator++;
                      }
                      reader.readAsDataURL(f);
                    }
                  }
                });
              });
            });
  
            $('body').on('click', ".upload__img-close", function (e) {
              var file = $(this).parent().data("file");
              for (var i = 0; i < imgArray.length; i++) {
                if (imgArray[i].name === file) {
                  imgArray.splice(i, 1);
                  break;
                }
              }
              $(this).parent().parent().remove();
            });
          }

          //Ajouter un service

          $(document).ready(function() {
            $("#addmore").click(function() {
              $("#req_input").append(
                '<div class="">'+
                      '<div class="form-group row required_inp">'+
                        '<div class="col-md-6 col">'+
                          '<input type="text" class="form-control form-control-lg mb-2" placeholder="Nos services">'+
                        '</div>'+
                          '<button type="button" class="inputRemove btn btn-shadow text-danger font-weight-bold">'+
                            '<i class="bx bx-trash p-md-1"></i>'+
                          '</button>'+
                      '</div>'+
                  '</div>'  
                  );
            });
            $('body').on('click','.inputRemove',function() {
              $(this).parent('div.required_inp').remove()
            });
          });

          //Ajouter une equipe

          $(document).ready(function() {
            $("#addmore_2").click(function() {
              $("#req_input_2").append(
                      '<div class="form-group row required_inp_2">'+
                        '<div class="col-md-4">'+
                          '<input type="file" class="form-control form-control-lg mb-2">'+
                        '</div>'+
                        '<div class="col-md-4">'+
                          '<input type="text" class="form-control form-control-lg mb-2" placeholder="Nom et Prénoms">'+
                        '</div>'+
                        '<div class="col-md-3 col">'+
                          '<input type="text" class="form-control form-control-lg mb-2" placeholder="Role">'+
                        '</div>'+
                          '<button type="button" class="inputRemove_2 btn btn-shadow text-danger font-weight-bold">'+
                            '<i class="bx bx-trash p-md-1"></i>'+
                          '</button>'+
                      '</div>'
                  );
            });
            $('body').on('click','.inputRemove_2',function() {
              $(this).parent('div.required_inp_2').remove()
            });
          });

          //Ajouter des coerdonnées

          $(document).ready(function(){

            let cell = '<div class="form-group row required_inp_2">'+
                          '<div class="input-group col-md-10 col">'+
                            '<div class="input-group-prepend">'+
                              '<div class="input-group-text bg-color text-white">'+
                                '<i class="bx bx-mobile-alt"></i>'+
                              '</div>'+
                            '</div>'+
                            '<input type="tel" pattern="[0-9]{10}" value="" maxlength="20" class="form-control form-control-lg" placeholder="Téléphone mobile">'+
                          '</div>'+
                            '<button type="button" class="inputRemove_2 col-md-2 col-auto p-1 btn btn-shadow text-danger font-weight-bold">'+
                              '<i class="bx bx-trash p-md-1"></i>'+
                            '</button>'+
                        '</div>';  
            
              let email = '<div class="form-group row required_inp_2">'+
                          '<div class="input-group col-md-10 col">'+
                            '<div class="input-group-prepend">'+
                              '<div class="input-group-text bg-color text-white">'+
                                '<i class="bx bx-envelope"></i>'+
                              '</div>'+
                            '</div>'+
                            '<input type="email" class="form-control form-control-lg" placeholder="Email">'+
                          '</div>'+
                            '<button type="button" class="inputRemove_2 col-md-2 col-auto p-1 btn btn-shadow text-danger font-weight-bold">'+
                              '<i class="bx bx-trash p-md-1"></i>'+
                            '</button>'+
                        '</div>';
  
  
              let tell = '<div class="form-group row required_inp_2">'+
                          '<div class="input-group col-md-10 col">'+
                            '<div class="input-group-prepend">'+
                              '<div class="input-group-text bg-color text-white">'+
                                '<i class="bx bx-phone"></i>'+
                              '</div>'+
                            '</div>'+
                            '<input type="tel" pattern="[0-9]{10}" value="" maxlength="20" class="form-control form-control-lg" placeholder="Téléphone Fixe">'+
                          '</div>'+
                            '<button type="button" class="inputRemove_2 col-md-2 col-auto p-1 btn btn-shadow text-danger font-weight-bold">'+
                              '<i class="bx bx-trash p-md-1"></i>'+
                            '</button>'+
                        '</div>';
              
              let fax = '<div class="form-group row required_inp_2">'+
                  '<div class="input-group col-md-10 col">'+
                    '<div class="input-group-prepend">'+
                      '<div class="input-group-text bg-color text-white">'+
                        '<i class="bx bx-printer"></i>'+
                      '</div>'+
                    '</div>'+
                    '<input type="tel" pattern="[0-9]{10}" value="" maxlength="20" class="form-control form-control-lg" placeholder="FAX">'+
                  '</div>'+
                    '<button type="button" class="inputRemove_2 col-md-2 col-auto p-1 btn btn-shadow text-danger font-weight-bold">'+
                      '<i class="bx bx-trash p-md-1"></i>'+
                    '</button>'+
                '</div>';
  
              let web = '<div class="form-group row required_inp_2">'+
                  '<div class="input-group col-md-10 col">'+
                    '<div class="input-group-prepend">'+
                      '<div class="input-group-text bg-color text-white">'+
                        '<i class="bx bx-globe"></i>'+
                      '</div>'+
                    '</div>'+
                    '<input type="url" class="form-control form-control-lg" placeholder="Site Web">'+
                  '</div>'+
                    '<button type="button" class="inputRemove_2 col-md-2 col-auto p-1 btn btn-shadow text-danger font-weight-bold">'+
                      '<i class="bx bx-trash p-md-1"></i>'+
                    '</button>'+
                '</div>';
  
            $("select.custom_select").change(function(){
            var selectedOption = $(this).children("option:selected").text();
            $(this).next("input").val(selectedOption);
            $(this).val('default');
  
                if(selectedOption === "Cells") {
                  $(".new_option").append(cell);
                } else if(selectedOption === "Tels") {
                  $(".new_option").append(tell);
                } else if(selectedOption === "Fax") {
                  $(".new_option").append(fax);
                }
                else if(selectedOption === "Email") {
                  $(".new_option").append(email);
                }
                else if(selectedOption === "Web") {
                  $(".new_option").append(web);
                }
              });
  
              $('body').on('click','.inputRemove_3',function() {
                $(this).parent('div.required_inp_3').remove()
              });
          });
    
    //---FIN JS DE LA PAGE INFO----



    //----COMPTABILITE----
        
        /***Pargination***/

      getPagination('.table-id');

      function getPagination(table) {
        var lastPage = 1;

        $('#maxRows')
          .on('change', function(evt) {
            //$('.paginationprev').html('');						// reset pagination

          lastPage = 1;
            $('.pagination')
              .find('li')
              .slice(1, -1)
              .remove();
            var trnum = 0; // reset tr counter
            var maxRows = parseInt($(this).val()); // get Max Rows from select option

            if (maxRows == 5000) {
              $('.pagination').hide();
            } else {
              $('.pagination').show();
            }

          var totalRows = $(table + ' tbody tr').length; // numbers of rows
          $(table + ' tr:gt(0)').each(function() {
            // each TR in  table and not the header
            trnum++; // Start Counter
            if (trnum > maxRows) {
              // if tr number gt maxRows

              $(this).hide(); // fade it out
            }
            if (trnum <= maxRows) {
              $(this).show();
            } // else fade in Important in case if it ..
          }); //  was fade out to fade it in
          if (totalRows > maxRows) {
            // if tr total rows gt max rows option
            var pagenum = Math.ceil(totalRows / maxRows); // ceil total(rows/maxrows) to get ..
            //	numbers of pages
            for (var i = 1; i <= pagenum; ) {
              // for each page append pagination li
              $('.pagination #prev')
                .before(
                  '<li class="page-item page-link" data-page="' +
                    i +
                    '">\
                      <span>' +
                    i++ +
                    '<span class="sr-only">(current)</span></span>\
                    </li>'
                )
                .show();
            } // end for i
          } // end if row count > max rows
          $('.pagination [data-page="1"]').addClass('active_pagination'); // add active class to the first li
          $('.pagination li').on('click', function(evt) {
            // on click each page
            evt.stopImmediatePropagation();
            evt.preventDefault();
            var pageNum = $(this).attr('data-page'); // get it's number

            var maxRows = parseInt($('#maxRows').val()); // get Max Rows from select option

            if (pageNum == 'prev') {
              if (lastPage == 1) {
                return;
              }
              pageNum = --lastPage;
            }
            if (pageNum == 'next') {
              if (lastPage == $('.pagination li').length - 2) {
                return;
              }
              pageNum = ++lastPage;
            }

            lastPage = pageNum;
            var trIndex = 0; // reset tr counter
            $('.pagination li').removeClass('active_pagination'); // remove active class from all li
            $('.pagination [data-page="' + lastPage + '"]').addClass('active_pagination'); // add active class to the clicked
            // $(this).addClass('active');					// add active class to the clicked
                limitPagging();
                  $(table + ' tr:gt(0)').each(function() {
                    // each tr in table not the header
                    trIndex++; // tr index counter
                    // if tr index gt maxRows*pageNum or lt maxRows*pageNum-maxRows fade if out
                    if (
                      trIndex > maxRows * pageNum ||
                      trIndex <= maxRows * pageNum - maxRows
                    ) {
                      $(this).hide();
                    } else {
                      $(this).show();
                    } //else fade in
                  }); // end of for each tr in table
                }); // end of on click pagination list
          limitPagging();
          })
          .val(5)
          .change();

        // end of on select change

        // END OF PAGINATION
      }

      function limitPagging(){
        // alert($('.pagination li').length)

        if($('.pagination li').length > 7 ){
            if( $('.pagination li.active').attr('data-page') <= 3 ){
            $('.pagination li:gt(5)').hide();
            $('.pagination li:lt(5)').show();
            $('.pagination [data-page="next"]').show();
          }if ($('.pagination li.active').attr('data-page') > 3){
            $('.pagination li:gt(0)').hide();
            $('.pagination [data-page="next"]').show();
            for( let i = ( parseInt($('.pagination li.active').attr('data-page'))  -2 )  ; i <= ( parseInt($('.pagination li.active').attr('data-page'))  + 2 ) ; i++ ){
              $('.pagination [data-page="'+i+'"]').show();

            }

          }
        }
      }

      $(function() {
        // Just to append id number for each row
        $('table tr:eq(0)').prepend('<th> ID </th>');

        var id = 0;

        $('table tr:gt(0)').each(function() {
          id++;
          $(this).prepend('<td>' + id + '</td>');
        });
      });


      //filter table

      (function(document) {
        'use strict';

        var LightTableFilter = (function(Arr) {

          var _input;
          var _select;

          function _onInputEvent(e) {
            _input = e.target;
            var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
            Arr.forEach.call(tables, function(table) {
              Arr.forEach.call(table.tBodies, function(tbody) {
                Arr.forEach.call(tbody.rows, _filter);
              });
            });
          }
          
          function _onSelectEvent(e) {
            _select = e.target;
            var tables = document.getElementsByClassName(_select.getAttribute('data-table'));
            Arr.forEach.call(tables, function(table) {
              Arr.forEach.call(table.tBodies, function(tbody) {
                Arr.forEach.call(tbody.rows, _filterSelect);
              });
            });
          }

          function _filter(row) {
            
            var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
            row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';

          }
          
          function _filterSelect(row) {
          
            var text_select = row.textContent.toLowerCase(), val_select = _select.options[_select.selectedIndex].value.toLowerCase();
            row.style.display = text_select.indexOf(val_select) === -1 ? 'none' : 'table-row';

          }

          return {
            init: function() {
              var inputs = document.getElementsByClassName('light-table-filter');
              var selects = document.getElementsByClassName('select-table-filter');
              Arr.forEach.call(inputs, function(input) {
                input.oninput = _onInputEvent;
              });
              Arr.forEach.call(selects, function(select) {
              select.onchange  = _onSelectEvent;
              });
            }
          };
        })(Array.prototype);

        document.addEventListener('readystatechange', function() {
          if (document.readyState === 'complete') {
            LightTableFilter.init();
          }
        });

      })(document);

      //Filtrer par date

      

      //Télécharger en PDF

function createPDF() {
  var element = document.getElementById('element-to-print');
  html2pdf(element, {
      margin:1,
      padding:0,
      filename: 'myfile.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 2,  logging: true },
      jsPDF: { unit: 'in', format: 'A2', orientation: 'P' },
      class: createPDF
  });
};


// INVOICESS

$(document).ready(function(){
  var i=1;
  $("#add_contente").click(function(){b=i-1;
      $('#addr'+i).html($('#addr'+b).html());
      $('#invoice_id .invoices_contente').append('<ul class="list-group list-group-horizontal width-100 border-0 shadow-sm mb-3 " id="addr'+(i+1)+'"></ul>');
      i++; 
  });
  $("#delete_row").click(function(){
    if(i>1){
  $("#addr"+(i-1)).html("");
  i--;
  }
  calc();
});

$('#invoice_id .invoices_contente').on('keyup change',function(){
  calc();
});
$('#tax1').on('keyup change',function(){
  calc_total();
});


});

function calc()
{
$('#invoice_id .invoices_contente ul').each(function(i, element) {
  var html = $(this).html();
  if(html!='')
  {
    var qty = $(this).find('.qty').val();
    var price = $(this).find('.price').val();
    $(this).find('.total').val(qty*price);
    
    calc_total();
  }
  });
}

function calc_total(){
  total=0;
  $('.total').each(function() {
        total += parseInt($(this).val());
    });
  $('#sub_total').val(total.toFixed(0));
  tax_sum=(total/100)*$('#tax1').val();
  $('#tax_amount').val(tax_sum.toFixed(0));
  $('#total_amount').val((tax_sum+total).toFixed(0));
}

// add logo invoice and devis

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $('#image-preview').attr('src', e.target.result);
      $('#image-preview').hide();
      $('#image-preview').fadeIn(650);
    }
    reader.readAsDataURL(input.files[0]);
  }
}

$("#file-input").change(function() {
  readURL(this);
});

//COLOR PICKER

// on input, get value and save it as 'storedValue'
function changeColor() { 
  var userColor = document.getElementById('colorID').value;
  localStorage.setItem('storedValue', invoices__color.style.backgroundColor = userColor);
}

// if there is a value stored, update color picker and background color
if(localStorage.storedValue) {
  document.getElementById('colorID').value = localStorage.storedValue;
  invoices__color.style.backgroundColor      = localStorage.storedValue;
}

//TEXT COLOR

$(document).ready(function() {

  $('.bGButton').find('button').click(function() {
    $('body').removeClass('red orange yellow green blue purple grey white black');
    var color = $(this).attr('class');
    $('body').addClass(color);
    console.log($('body').attr('class'));
  });
  
 	$('.textButton').find('button').click(function() {
    $('body').removeClass('redText orangeText yellowText greenText blueText purpleText greyText whiteText blackText');
    var tColor = $(this).attr('class');
    $('body').addClass(tColor);
    console.log($('body').attr('class'));
  });

});

// BTN HOVER 

$(document).ready(function () {
  // Call the event handler on #text
  $(".content-rad-225").hover(function () {
    /*
    Hover alows a mouseenter and mouse leave event
    seperated by a comma
    */
    //Event one mouse enter add class
    $(this).find("a h4 span").addClass("stockhover");
  },
    // Event two mouse out remove class               
    function () {
      ('span')
      $(this).find("a h4 span").removeClass("stockhover");
    });
});


// filter the div element

document.getElementById("value").addEventListener("keyup", filterSearch);
function filterSearch(){
   var value,nameSearch,boxSearch,i;
   value = document.getElementById('value').value.toUpperCase();
   boxSearch = document.getElementsByClassName('boxSearch');
  for(i=0;boxSearch.length;i++){
    nameSearch = boxSearch[i].getElementsByClassName('nameSearch');
    if(nameSearch[0].innerHTML.toUpperCase().indexOf(value) > -1){
      boxSearch[i].style.display ="flex";
    }else{
      boxSearch[i].style.display = "none";
    }
  }  
}
  
var delay = 500;
$(".progress-bar").each(function(i){
    $(this).delay( delay*i ).animate( { width: $(this).attr('aria-valuenow') + '%' }, delay );

    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: delay,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now)+'%');
        }
    });
});