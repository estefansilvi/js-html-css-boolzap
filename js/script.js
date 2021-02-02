var utlimoAccesso = new Date();
var hour = utlimoAccesso.toLocaleString();
var app = new Vue({
  el: '#app-container',
  data: {
    sentTime: hour,
    utenteSelezionato: 'Michele',
    imageSelezionata:'_1',
    ultimoAccesso:'16:15',
    indexAttuale:0,
    newMessage:'',
    contacts: [
  	{
  		name: 'Michele',
  		avatar: '_1',
  		visible: true,
  		messages: [
  			{
  				date: '10/01/2020 15:30:55',
  				text: 'Hai portato a spasso il cane?',
  				status: 'sent'
  			},
  			{
  				date: '10/01/2020 15:50:00',
  				text: 'Ricordati di dargli da mangiare',
  				status: 'sent'
  			},
  			{
  				date: '10/01/2020 16:15:22',
  				text: 'Tutto fatto!',
  				status: 'received'
  			}
  		],
  	},
  	{
  		name: 'Fabio',
  		avatar: '_2',
  		visible: true,
  		messages: [
  			{
  				date: '20/03/2020 16:30:00',
  				text: 'Ciao come stai?',
  				status: 'sent'
  			},
  			{
  				date: '20/03/2020 16:30:55',
  				text: 'Bene grazie! Stasera ci vediamo?',
  				status: 'received'
  			},
  			{
  				date: '20/03/2020 16:35:00',
  				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
  				status: 'sent'
  			}
  		],
  	},
  	{
  		name: 'Samuele',
  		avatar: '_3',
  		visible: true,
  		messages: [
  			{
  				date: '28/03/2020 10:10:40',
  				text: 'La Marianna va in campagna',
  				status: 'received'
  			},
  			{
  				date: '28/03/2020 10:20:10',
  				text: 'Sicuro di non aver sbagliato chat?',
  				status: 'sent'
  			},
  			{
  				date: '28/03/2020 16:15:22',
  				text: 'Ah scusa!',
  				status: 'received'
  			}
  		],
  	},
  	{
  		name: 'Luisa',
  		avatar: '_4',
  		visible: true,
  		messages: [
  			{
  				date: '10/01/2020 15:30:55',
  				text: 'Lo sai che ha aperto una nuova pizzeria?',
  				status: 'sent'
  			},
  			{
  				date: '10/01/2020 15:50:00',
  				text: 'Si, ma preferirei andare al cinema',
  				status: 'received'
  			}
  		],
  	},
  ]
},
methods:{
    selectedContatto : function(i) {
      var lastMessage = i.messages[i.messages.length - 1].date;
      var dateTimeArray =lastMessage.split(' ');
      var createdDate = dateTimeArray[1].split(':',2);
      this.utenteSelezionato = i.name;
      this.indexAttuale = this.contacts[i];
      this.imageSelezionata = i.avatar;
      this.utlimoAccesso = createdDate[0] +':'+ createdDate[1];
    }
  },
  createdChat : function(indexAttuale,x){
        var createdChat = this.contacts[indexAttuale].messages[x].date.split(' ')[1].split(':',2);
        return createdChat[0] +':'+ createdChat[1];
  },
  getMessageClass : function(i){
    let conctactAttuale = this.contacts[this.indexAttuale];
    console.log(conctactAttuale)
  }

});

Vue.config.devtools = true;