Vue.component('booking',
{
    props : ["id"],
    template : `<div :class="'animated fadeInRight component booking ' + id">
                    <h1 v-if="afterSubmit" class="animated bounceIn">Votre réservation a bien été prise en compte !</h1>
                    <span class="notifications notif animated shake">Veuillez sélectionner une date avant l'horaire</span>


                    <div v-if="!afterSubmit">
                        <form v-on:submit.prevent>
                            <div class="input-field col s6">
                                <input id="last_name" type="text" class="validate" v-model="customerName">
                                <label for="last_name" class="customerinfo">Votre nom</label>
                            </div>
                            <div class="input-field col s6">
                                <input id="phone" type="text" class="validate" v-model="customerNumber">
                                <label for="phone" class="customerinfo">Votre téléphone</label>
                            </div>

                            <input type="text" class="datepicker" placeholder="Choisissez une date">
                            <div class="select-time" @click="checkDate">Voir les disponibilités</div>
                            <select class="browser-default time" v-show="dateSelected == 'selected'">
                                <option value="">Choisissez un horaire</option>
                                <option vcheck v-for="time in allTime" :value="time">{{ time }}</option>
                            </select>
                            <hr>

                            <button @click="post" class="btn waved-effect waved-light" type="submit" name="action">
                            <i class="material-icons right">send</i>
                            Envoyer
                            </button>
                        </form>
                    </div>

                </div>`,

    data()
    {
        return {
            afterSubmit : false,
            customerName: "",
            customerNumber: "",
            dateSelected : 'notselected',
            date : '',
            bookedTime : [],
            allTime : [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
            validationName : false,
            validationDate : false,
            validationTime : false
        }
    },

    methods :
    {
        checkDate()
        {
            this.date = document.getElementsByClassName('datepicker')[0].value;
            if(this.date)
            {
                this.dateSelected = 'selected';
                //On cherche dans les réservations existantes si l'horaire n'est pas déjà pris ( comme nous n'arrivons pas à connecter notre base de données, toutes les horaires sont disponibles par défaut )
                this.$http.get('https://projetwebm1-4bd9f-default-rtdb.europe-west1.firebasedatabase.app/appointments.json').then(function()
                {
                    let savedData = Object.values(data.body);
                    for(let x = 0; x < savedData.length; x++)
                    {
                        //si la date est disponible alors on l'envoie dans le tableau "bookedTime"
                        if(savedData[x].date == this.date)
                        {
                            this.bookedTime.push(parseInt(savedData[x].time));
                        }
                    }
                    console.log(this.bookedTime);
                });
            }
            else
            {
                this.notification('notif');
            }
        },
        post()
        {
            let time = document.getElementsByClassName('time')[0].value;
            this.checkDate();

            (!this.date)
        },
        notification(element)
        {
            document.getElementsByClassName(element)[0].style.display = "block";
            setTimeout(function()
            {
                document.getElementsByClassName(element)[0].style.display = "none";
            }, 5000)
        }
    }

});

//Il nous faut maintenant créer une directive pour filter les horaires
Vue.directive('check',
{
    update(el, binding, vnode)
    {
        let time = parseInt(el.innerHTML);
        let check = vnode.context.bookedTime.includes(time); //Retourne un booléen

        if(check)
        {
            el.disabled = true;
            el.style.color = "red"; //Les horaires non disponibles devraient s'afficher en rouge et ne pas être sélectionnables
        }
        else
        {
            el.disabled = false;
            el.style.color = "green";
            el.style.fontSize = "1.2rem";
        }
    }
});





document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    //On borne la date pour que l'utilisateur ne puisse pas sélectionner une date déjà passée
    var instances = M.Datepicker.init(elems, {minDate : new Date()});
  });