const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'help', //aliases aide, aled, sos (ouais bon après faut pas abuser hein pas plus d'alias c'est simple help XD) (ouais bon j'ajoute aled et sos pour le délire MDR)
    execute(message, args) {
        if (args == 0) {
            const embed = new MessageEmbed()
                .setTitle("\\❓ | Besoin d'aide ?")
                .setDescription("Pour consulter un type de commande taper !!help <Catégorie>.\nVoici les différentes catégories :\n Aventure, Moderation, Economie.")
                .setColor('#E81224')
                .setThumbnail('https://cdn.discordapp.com/avatars/740502952405499905/4302949675662d03170dd52ace7ac17c.png')
                .addField("**Commande Start**", "Commande pour débuter ton aventure si ce n'est pas déjà fait. N'hésite pas à passer voir les salons infos auparavant.", false)
                .addField("**Commandes d'Aventure**", "Si tu viens de mettre les pieds dans ce monde et que tu souhaites te repérer un peu.", false)
                .addField("**Commandes de Modérations (Réservé au Staff)**", "Commandes utiles au Staff et Administrateur pour modérer les messages et les utilisateurs", false)
                .addField("**Commandes d'Economie**", "Commandes servant à utiliser et gérer son argent ainsi qu'accédeer au Shop des utilisateurs.", false)
                .addField("**Commandes Fun**", "Des petites commandes simples à utiliser pour jouer entre amis aussi bien INRP que HRP.", false)
            message.channel.send({embeds: [embed]})

        } else if (args == "Moderation" || args == "moderation" || args == "Modération" || args == "modération" || args == "modo" || args == "mod"){
            const embed = new MessageEmbed()
                .setTitle("Commandes Modérations")
                .setDescription("Voici les différentes commandes de modérations disponibles sur le bot :")
                .setColor('#E81224')
                .setThumbnail('https://cdn.discordapp.com/avatars/740502952405499905/4302949675662d03170dd52ace7ac17c.png')
                .addField("**Ban :**", "Bannir définitivement (sauf Unban) un utilisateur du serveur. (il ne pourra pas être réinvité sur le serveur)", false)
                .addField("**Kick :**", "Expulser un utilisateur du serveur. (il pourra être réinvité au serveur contrairement au ban)", false)
                .addField("**Clear :**", "Supprimer les derniers messages envoyés dans le channel.", false)
                .addField("**Mute :**", "Empêcher un membre d'envoyer des messages pendant une période de temps indéterminé.", false)
                .addField("**Unmute :**", "Réautorisé un membre à parler suite à un mute.", false)
                .addField("**Tempmute :**", "Empêcher un membre d'envoyer des messages pendant une certaine période de temps. (Ex:5s, 5m, 5h, 5d)", false)
            message.channel.send({embeds: [embed]})
        } else if (args == "Economy" || args == "Economie" || args == "Économie" || args == "economie" || args == "economy" || args == "économie"){
            const embed = new MessageEmbed()
                .setTitle("Commandes Economie")
                .setDescription("Voici les commandes d'Économie elles vous serviront a gérer votre porte monnaie et accéder à la boutique par exemple.")
                .setColor('#E81224')
                .setThumbnail('https://cdn.discordapp.com/avatars/740502952405499905/4302949675662d03170dd52ace7ac17c.png')
                .addField("**Money :**", "Commande pour savoir quel somme d'argent vous avez dans votre porte-monnaie et vous permettre de gérer votre budget.", false)
                .addField("**Shop :**", "Commande pour obtenir les informations de la boutique et connaitre les objets que vous pouvez payer en fonction de votre budget.", false)
                .addField("**Buy (Objet) :**", "Commande pour acheter un objet dans le Shop et si vous en avez les moyens.", false)
                .addField("**Sell (Objet) (Utilisateur (facultatif)) :**", "Commande pour vendre un objet à une boutique ou à un utilisateur en particulier s'il accepte.", false)
                .addField("**Items :**", "Commande pour voir tout les objets que vous avez dans votre inventaire leurs quantités et leurs valeurs", false)
                .addField("**AddMoney/Bank :**", "Commande réservé aux administrateurs pour donner une certaine somme d'argent à un joueur", false)
                .addField("**RemoveMoney/Bank :**", "Commande réservé aux administrateurs pour prendre une certaine somme d'argent à un joueur.", false)
            message.channel.send({embeds: [embed]})
        } else if (args == "Aventure" || args == "aventure" || args == "adventure" || args == "Adventure"){
            const embed = new MessageEmbed()
                .setTitle("Commandes Aventure")
                .setDescription("Tu viens de commencer ton aventure et tu souhaites decouvrir des commandes qui t'aideront à améliorer ton RP, alors tu es au bon endroit !")
                .setColor('#E81224')
                .setThumbnail('https://cdn.discordapp.com/avatars/740502952405499905/4302949675662d03170dd52ace7ac17c.png')
                .addField("**Start :**", "Commande pour débuter ton aventure si ce n'est pas déjà fait. N'hésite pas à passer voir les salons infos auparavant.", false)
                .addField("**Fiche :**", "Créer la fiche RP d'un membre avec des instructions à noter (Nom prénom, Age, Histoire) une fois fait cette commande affichera la fiche en question.", false)
                .addField("**Profil (ou p) :**", "Afficher les données de l'utilisateur INRP, (type Argent, Objet, Statistiques, Level) avec une image.", false)
                .addField("**Train :**", "Entrainer votre personnage quotidiennement et améliorer ces statistiques de combat.", false)
                .addField("**Fight @Adversaire :**", "Affrontez un adversaire dans un combat en tour par tour système de sélection des attaques avec utilisations d'item (style RPG Classique).", false)
                .addField("**Distributeur :**", "Le distributeur automatique vous permettant de faire des transferts d'argents vers votre compte.", false)
                .addField("**Hunterbook :**", "Un livre un peu spécial transmis par l'organisation Hunter qui vous permettra d'en savoir un peu plus sur les zones que vous explorez renseignez par des hunters experimentés.", false)
                .addField("**Statistiques (ou stats) :**", "Afficher les statistiques du personnage montrant le nombre d'entrainements restants par jour etc etc...", false)
            message.channel.send({embeds: [embed]})
        } else if (args == "fun" || args == "Fun"){
            const embed = new MessageEmbed()
                .setTitle("Commande Fun")
                .setDescription("Des petites commandes simples à utiliser pour jouer entre amis aussi bien INRP que HRP.")
                .setColor('#E81224')
                .setThumbnail('https://cdn.discordapp.com/avatars/740502952405499905/4302949675662d03170dd52ace7ac17c.png')
                .addField("A faire", "A faire <a:izukuhype:721399731326287954>", false)
                .addField("PP", "Commande pour afficher votre Photo de Profil en gros sur discord pour pouvoir l'enregistrer ", false)
                .addField("Ping", "Commande pour vérifier la latence du bot. ", false)
                .addField("Jankenpon", "Commande pour faire des parties de pierre feuille ciseaux entre amis, pour effectuer des décisions ou simplement s'amuser entre amis.", false)
            message.channel.send({embeds: [embed]})
        } else {
            message.channel.send("**:x: Cela ne correspond pas a une catégorie disponible.**")
        }
    }
}