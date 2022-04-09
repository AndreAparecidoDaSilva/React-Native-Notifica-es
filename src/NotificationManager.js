import PushNotification from "react-native-push-notification"

class NotificationManager {

    setNavegador(novoNavegador)
      {
          navegador = novoNavegador
      }

    createChannel = () => {
        PushNotification.createChannel(
            {
                channelId: "channel-id", // (required)
                channelName: "My channel", // (required)
                channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
                playSound: false, // (optional) default: true
                soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
                //importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
                vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
              },
              (created) => console.log(`createChannel returned '${created}'`)
        );
    }
    // Configuração orientada pela documentação do React Native Push Notification
    // Essa configuração garante o funcionamento da biblioteca no Android e no iOS
    configure = () => {
        PushNotification.configure({
            onRegister: function (token) {
                console.log("[NotificationManager] onRegister token:", token);
            },
            onNotification: function (notification) {
                console.log("[NotificationManager] onNotification:", notification);
                navegador.navigate("Detalhe")
                // Função de processamento da notificação 
                // Chamada quando uma notificação é recebida ou aberta
            },
        })
    }

    // É aqui que nossa notificação para o Android é construida
    buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
        return {
            id: id,
            autoCancel: true,
            largeIcon: options.largeIcon || "ic_launcher",
            smallIcon: options.smallIcon || "ic_launcher",
            bigText: message || '',
            subText: title || '',
            vibrate: options.vibrate || false,
            vibration: options.vibration || 300,
            priority: options.priority || "high",
            importance: options.importance || "high",
            data: data
        }
    }

    // Fução que exibe a notificação
    showNotification = (id, title, message, data = {}, options = {}) => {
        PushNotification.localNotification({
            /* Propriedades do Android */
            ...this.buildAndroidNotification(id, title, message, data, options),

            /* Propriedades do Android e iOS */
            title: title || "",
            message: message || "",
            playSound: options.playSound || false,
            soundName: options.soundName || 'default',
            channelId: "channel-id",
            userInteraction: false
        })
    }

    // Função que cancela todas notiificações e limpa as que estão no centro de notificações
    cancelAllLocalNotification = () => {
        PushNotification.cancelAllLocalNotifications();
    }
    

    agendarNotificacoes = () => {
        PushNotification.localNotificationSchedule({
            //... You can use all the options from localNotifications
            id: 3,
            title:"Você tem cupons!!!",
            channelId:"channel-id",
            message: "Você acabou de ganhar um cupom com 20% de desconto no próximo pedido!", // (required)
            date: new Date(Date.now() + 5 * 1000 * 60), // in 60 secs
            allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
          
            /* Android Only Properties */
            repeatTime: 20 * 1000 * 60, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
            repeatType:"time"
          });

          PushNotification.localNotificationSchedule({
            //... You can use all the options from localNotifications
            id: 4,
            title:"Hum, que fome!!!",
            channelId:"channel-id",
            message: "Tá chegando a hora do almoço, deixe as panelas de lado e faça seu pedido!", // (required)
            date: new Date(Date.now() + 10 * 1000 * 60), // in 60 secs
            allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
          
            /* Android Only Properties */
            repeatTime: 20 * 1000 * 60, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
            repeatType:"time"
          });

          PushNotification.localNotificationSchedule({
            //... You can use all the options from localNotifications
            id: 5,
            title:"Tem oferta na área!!!",
            channelId:"channel-id",
            message: "Faça ja seu pedido e ganhe o refri de brinde!", // (required)
            date: new Date(Date.now() + 15 * 1000 * 60), // in 60 secs
            allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
          
            /* Android Only Properties */
            repeatTime: 20 * 1000 * 60, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
            repeatType:"time"
          });
    }

}

export const notificationManager = new NotificationManager();