Vue.component('contact',
{
    props : ["id"],
    template : `<div :class="'animated fadeInRight component contact ' + id">
                   <i class="material-icons-two-tone">phone</i>
                   <span>+33679586712</span><hr class="hrhr">

                   <i class="material-icons-two-tone">email</i>
                   <span>jdoke@gmail.com</span><hr class="hrhr">

                   <i class="material-icons-two-tone">location_city</i>
                   <span>33bis rue Château Thierry, 33700 Mérignac</span><hr class="hrhr">
                </div>`
});