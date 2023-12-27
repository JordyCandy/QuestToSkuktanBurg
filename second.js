var D1 = document.getElementById("Dialogue1");
var pickers = document.getElementById("pickers");

var container1 = document.getElementById("container1");
container1.style.display = "none";
var container2 = document.getElementById("container2");
container2.style.display = "none";
var container3 = document.getElementById("container3");
container3.style.display = "none";

var cButton = document.getElementById("continue");
cButton.style.display = "none";

function cardPicker(){
    D1.style.display ="none";
    pickers.style.display = "none";
    var num1 = Math.floor(Math.random() * 9 + 1);
    var num2 = Math.floor(Math.random() * 9 + 1);
    var num3 = Math.floor(Math.random() * 9 + 1);

    var imgElement1 = document.createElement("img");
    var para1 = document.createElement("p");
    imgElement1.alt = "Card image 1";
    imgElement1.classList.add("imgs1");

    var imgElement2 = document.createElement("img");
    var para2 = document.createElement("p");
    imgElement2.alt = "Card image 2";
    imgElement2.classList.add("imgs1");

    var imgElement3 = document.createElement("img");
    var para3 = document.createElement("p");
    imgElement3.alt = "Card image 3";
    imgElement3.classList.add("imgs1");
    

    switch(num1){
        case 1:
            imgElement1.src = "./Images2/11-justice.webp";
            para1.textContent = "Justice represents cause, effect and balanced thought and action. Sometimes we find ourselves the victims of someone else's malicious intent. If you have been wronged in any way, Justice arrives to restore balance and order. This isn't to say things will turn out as you want. However, pulling this car supports the adage 'All's well that ends well.'";
            break;
        
        case 2:
            imgElement1.src = "./Images2/14-temperance.jpg";
            para1.textContent = "Avoid all extreme situations when Temperance is pulled. There are times to 'go for the jugular,' this isn't the angel's message. Some situations are complicated and require patience and special care, even when your emotions tell you to react. Temperance is a skill and practice makes perfect! Hold back from quick judgment. Resist the temptation to react immediately. Are there areas of your life in which you need to find balance? Could you benefit from learning to remain calm during moments of distress? Temperance has arrived to help you find the strength to do so.";
            break;

        case 3:
            imgElement1.src = "./Images2/18-moon.webp";
            para1.textContent = "You're allowing your imagination and emotions to take control of your life. The Moon falling in a reading is a warning in a sense. You're the crawfish rising from the sea. If you trust your intuition and push forward, you will receive deliverance from what binds you, first, you must be willing to face the reality of the situation. The Moon is also associated with illusions. There may be a truth in your life that you need to uncover. The Moon cautions you from accepting what things seem to be. It is time to dig deeper and allow the light to shine upon the fallacies in your life.";
            break;

        case 4:
            imgElement1.src = "./Images2/cups-04.webp";
            para1.textContent = "Feelings of being stagnant or stuck in life?  Are you so focused on the things that are going wrong and can't see clearly how to move forward? The Four of Cups not only shows your inner struggle but also represents outside influences. When you feel stuck or can't make decisions, step back and focus on what matters. Taking a look at the big picture and utilizing available opportunities to change your situation will make a world of difference. Everything you need might be right in front of you. So, don't let fear and doubt hold you back. All you need is to make a choice and move forward.";
            break;

        case 5:
            imgElement1.src = "./Images2/pentacles-09.webp";
            para1.textContent = "Self-reliance, financial stability, luxury, and personal accomplishment. It signifies enjoying the fruits of one's labor and independence in different aspects of life. The Nine of Pentacles represents a desire to have a life surrounded by all that you love. Additionally, this symbolizes all your personal dreams. What is it that you want most? Security, freedom to travel, financial success, a peaceful existence? Regardless of what the present looks like, the desires of your heart are not out of your reach. All of your aspirations are right around the corner.";
            break;
            
        case 6:
            imgElement1.src = "./Images2/pentacles-13-queen.webp";
            para1.textContent = "The Queen of Pentacles represents the best of both worlds. She is a wealthy, successful woman of royal blood. But even with the world at her fingertips, the Queen is still connected to reality. A representative of both a pragmatic and caring nature, Her Highness symbolizes all that is gained when one combines ambition with a caring nature and desire to see everyone succeed. What can you learn from the Queen's message of charity and compassion? If she has presented herself to you in a reading, it may be time to dig in deep while also opening your heart.";
            break;

        case 7:
            imgElement1.src = "./Images2/wands-02.webp";
            para1.textContent = "Two of Wands shows what happens when a new adventure awaits you. A card of personal freedom and choice, the Two of Wands represents two paths and you, with the ability to choose. Are you dissatisfied and ready to find a new route? Which road will you travel down? Will the grass really be greener on the other side? There are serious decisions to be made, but thankfully, the Two of Wands suggests you are well-equipped to make the tough calls.";
            break;

        case 8:
            imgElement1.src = "./Images2/wands-11-page.webp";
            para1.textContent = "With enthusiasm and a sense of adventure, the Page of Wands is a welcome sight. He represents the fun parts of life with child-like happiness.All Pages are messengers and bring with them good news as well as advice for self-acceptance.A Peter Pan, if you will, the Page of Wands desires to trigger something within you that allows you to see yourself as you really are. He also recommends following his lead and jumping into the things you are passionate about wholeheartedly.";
            break;

        case 9:
            imgElement1.src = "./Images2/wands-12-knight.webp";
            para1.textContent = "Even the brightest rose has its thorns. The Knight, bears dual messages. He is both a harbinger of blessings and a cautionary figure, embodying the sheer force of will and the reckless intensity of a wildfire. His nature can be as inspiring as it is rash and volatile, bringing about swift changes that are as unpredictable as they are transformative.Beneath the helmet of this Knight, we find a spirit of adventure that is both captivating and cautionary, a reminder that each daring leap forward comes with its risks.";
            break;
    }

    switch(num2){
        case 1:
            imgElement2.src = "./Images2/0-fool.webp";
            para2.textContent = "This stands for unlimited potential. To see the Fool generally indicates that you're on the verge of an unexpected and exciting new adventure in your daily life. This may require you to take a blind leap of faith.There will be a rewarding experience that will contribute to your growth as a human being. The new adventure could be literal and may involve traveling to a new land or territories you've never visited.";
            break;
        
        case 2:
            imgElement2.src = "./Images2/13-death.webp";
            para2.textContent = "One of the reasons that the Death card is such a powerful one is because it carries so many different meanings. Oftentimes, the Death card signifies completing a chapter, putting the past behind you, and cutting out what is unnecessary. It can also signify a transition or middle ground between one phase of life and the next. The key is to welcome the Death card instead of avoiding it. What path is number thirteen trying to point you toward? After all, there is no new beginning without an ending.";
            break;

        case 3:
            imgElement2.src = "./Images2/cups-08.webp";
            para2.textContent = "The Eight of Cups represents abandonment and letting go. Have you chosen (or been forced) to leave a relationship, friendship, home, or job behind? The Eight of Cups card predicts this kind of loss and usually appears in readings where strong emotions are present. The Eight of Cups also signifies travel, so you may have a journey ahead of you. Many times, when faced with change, our instinct is to hold on tightly. The Eight of Cups offers a gentle reminder that letting go and accepting what is, can be a much easier and healthier alternative.";
            break;

        case 4:
            imgElement2.src = "./Images2/swords-05.webp";
            para2.textContent = "The Five of Swords in a reading represents conflict or drama that is about to come into your life. This doesn't necessarily mean that the problems you will come into contact with will be scary or impossible to deal with, but there will be a hard battle. Minor disagreements might be coming to a head. Perhaps, you'll start to experience more conflict at work. If you hope to overcome the issues that are headed your way, you'll need to sharpen your swords. The appearance of this card reminds you that now is the time to prepare yourself for the battle that is coming.";
            break;

        case 5:
            imgElement2.src = "./Images2/pentacles-10.webp";
            para2.textContent = "The Ten of Pentacles paints a picture of how wonderful life can be when everyone in a family is content and doing well. It represents both financial security and happiness, the best of both worlds. This depicts a solid foundation in which everyone is supported and nurtured. When it appears, you can consider it a sign that a big event or celebration is near. Long-term security and stability are also looming, but only if you are willing to put provisions in place to establish your family's future.";
            break;
            
        case 6:
            imgElement2.src = "./Images2/16-tower.webp";
            para2.textContent = "The Tower signifies destruction. If you've received the Tower card, prepare for things to be leveled and dismantled. As with all losses, this will probably be a painful process. It can also lead to a fresh start. Before making these positive changes, you must face the truth about a situation. Are you prepared to take your blinders off and take this personal crisis head-on? Seeing through illusions and letting go of what you wish things to be is the very first step.";
            break;

        case 7:
            imgElement2.src = "./Images2/cups-09.webp";
            para2.textContent = "The Nine of Cups represents reaching goals, wishes coming true, and fulfilling dreams. Nine golden cups filled with triumphant joy, pride, and a splash of potential fame, this card appears as a harbinger of prosperous success. The Cups card meanings resoundingly echo this sentiment: dare to dream and focus your intentions positively. Unleash your aspirations! The Nine of Cups stands by your side, offering the promise of dreams turned reality. You hold the magic to make wishes come true. What would you do if you knew you couldn't fail? This card urges you to do just that.";
            break;

        case 8:
            imgElement2.src = "./Images2/pentacles-05.webp";
            para2.textContent = "It is difficult to shine a positive light on the Five of Pentacles. Not many people desire in reading. It represents sickness, poverty, and struggle. If the Five of Pentacles has presented itself as a part of your reading, don't worry too much, its effects are transient, not long-term. Additionally, you can also concentrate on learning and growing from the hardships you are experiencing or are about to face. Knowing what the future could bring makes it easier to tailor our behavior to avoid future heartache.";
            break;

        case 9:
            imgElement2.src = "./Images2/15-devil.jpg";
            para2.textContent = "The Devil is the card of illusion. Although you have total control of your life, beliefs, and choices, the Devil card symbolizes how addiction, depression, and unhealthy bonds can make you feel out of control. Anything can be embodied by the Devil when in excess. Regardless of the nature of your particular problem, the message of the Devil is clear: redirect your attention away from the satisfaction of desires and toward the things that matter.";
            break;
    }

    switch(num3){
        case 1:
            imgElement3.src = "./Images2/03-empress.webp";
            para3.textContent = "In a reading, the upright Empress tarot card calls on you to connect with your feminine side. This can be translated in many ways, think of creativity, elegance, sensuality, fertility, and nurturing. She tells you to be kind to yourself and search for beauty and happiness. The Empress often brings strong bursts of creative or artistic energy. This creative energy may be in a painting or art project and other forms of expressing yourself creatively, like music or drama.";
            break;
        
        case 2:
            imgElement3.src = "./Images2/06-lovers.webp";
            para3.textContent = "The Lovers tarot card in the upright position can imply that you have major life-changing choices or dilemmas. Temptation is often part of that choice or dilemma. You may feel unsure about your direction or who to trust. Or you may have to choose between contradicting and equally unifying options. The Lovers in Tarot advises you not to go for the easy road (temptation). First, gather the information you need to make the right decision. If you face the problem and contemplate it wisely, it will lead you to greater things.";
            break;

        case 3:
            imgElement3.src = "./Images2/07-chariot.webp";
            para3.textContent = "When the Chariot shows up in a reading, it tells you that now is the time to get what you want. This card is a sign of encouragement. The Chariot is about overcoming obstacles and achieving. You will feel motivated and ambitious. This will help you get a stagnant situation moving and overcome all the challenges in your path. Keep focused and believe in your abilities, and you will achieve your goal. The Chariot tells you that a triumph awaits you, and you're in control. This may mean you must compete with others or find yourself in a situation that feels like a battle.";
            break;

        case 4:
            imgElement3.src = "./Images2/08-strength.webp";
            para3.textContent = "The Strength card represents strength, courage and patience. You have the power to overcome any obstacle, just like the Chariot. You need to act gracefully rather than just using brutal force when pulling the strength. The card also tells you to stay positive and think logically in stressful situations that test your patience and strength. You can obtain true control of a situation through compassion or understanding, not simply the power to impose your will. Strength indicates that you're persevering and can achieve anything. You're committed to what you must do and go about it.";
            break;

        case 5:
            imgElement3.src = "./Images2/pentacles-06.webp";
            para3.textContent = "The Six of Pentacles embodies all it means to be giving. Being charitable is seen by most as a part of good character. Consider Robin Hood. Because he gave to the poor, he was considered rich in spirit regardless of other character flaws. It isn't just the down-and-out who benefit from charity though. Aristotle summarized it this way: “The unfortunate need people who will be kind to them; the prosperous need people to be kind to.” Is there such a thing as being too kind? This card also cautions about the danger of not setting boundaries and giving to one's own detriment.";
            break;
            
        case 6:
            imgElement3.src = "./Images2/swords-06.webp";
            para3.textContent = "The Six of Swords card represents overcoming obstacles and moving forward. The battle has been won and now is the time to unwind and recharge your batteries. You have overcome hardship and healing is heading your way. Calmer waters are finally ahead and you'll have plenty of time to relax. If you have been battling with someone close to you, your hard work in trying to resolve the problems between the two of you is about to pay off. All you need to do is trust in yourself and keep the same momentum.";
            break;

        case 7:
            imgElement3.src = "./Images2/swords-07.webp";
            para3.textContent = "The Seven of Swords card represents trickery, theft, and dishonesty. You or someone around you might be using deceit to achieve a goal. The intention of these actions is deliberate, and they are done without thought of how they will affect other people. If you are the person who needs to make a change, the first step is recognizing that you are headed down the wrong path. You can create a master plan to change those behaviors. If it is someone else, you won't be able to force their hand. What you can do is to be alert as someone is trying to pull the wool over your eyes.";
            break;

        case 8:
            imgElement3.src = "./Images2/cups-01-ace.webp";
            para3.textContent = "Are you hoping for a fresh start in the romance department? The Ace of Cups is a positive omen that predicts happiness and joy in every area of life, including love. The Ace of Cups ushers in a fresh start that leaves the past behind and enhances what is new. When this card surfaces in a reading, it means that you are destined to find emotionally fulfilling relationships. An abundance of good things is coming your way, your cup really does runneth over!";
            break;

        case 9:
            imgElement3.src = "./Images2/17-star.jpg";
            para3.textContent = "The universe abundantly blesses you. We are attracting what we desire through our beliefs and thoughts. When the Star arrives it usually follows a difficult change or traumatic event. Going through something challenging can take the wind out of our sails and cause us to feel like things will never be the same. Death, loss, heartbreak, and other painful events can change us. This doesn't mean we can't build something better. What is it that you're trying to heal from? The Star wants you to open your heart, realize your inner strength, and have faith in what is to come.";
            break;
    }
    container1.style.display = "";
    container2.style.display = "";
    container3.style.display = "";

    document.getElementById("container1").appendChild(imgElement1);
    document.getElementById("container2").appendChild(imgElement2);
    document.getElementById("container3").appendChild(imgElement3);
    document.getElementById("container1").appendChild(para1);
    document.getElementById("container2").appendChild(para2);
    document.getElementById("container3").appendChild(para3);

    cButton.style.display = "";
}

pickers.addEventListener("click", cardPicker);

function continues(event){
    if(event.key === "c" || event.key === "C"){
        window.location.href = "./third.html";
    }
}
function hideDialogue1(){
    document.getElementById("Dialogue1").style.display = "none";
}

document.addEventListener("keypress", continues);

function timerForDialogue1(){
    setTimeout(hideDialogue1, 5000);
}

document.addEventListener("mouseover", timerForDialogue1);