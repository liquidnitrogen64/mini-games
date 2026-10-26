/* TEA STORY:
Worldbuilding:
    Flora/fauna: flora is mostly huge pond plants, as world rains often. Fauna is a lot of birds and creatures with vertical mobility.
    Development: basically a medieval-era world
    Religion: Cult of the Tea is the predominant religion, and tea cerimonies are regarded as extremely holy
    Politics:
        Major players: Cult of the Tea, The Camellian Empire, Assam Kingdom, The Kanton Federation: (Kilner City (major, independently-ruled trading center), Rooibos Polis, The State of Shennong)
        Relationships:
        Cult of the Tea: has largely remained unbiased, and has yet to express any direct support for anyone.
        The Camellian Empire: Is currently attacking Kilner City, which in response has formed a federation with similarly-sized allies in order to resist the Empire. The Empire is allied with the Assam Kingdom, but has yet to recieve any aid in their war effort.
        Assam Kingdom: Is allied with the Camellian Empire, but only maintains this relationship in order to not be conquered immediately. Has no desire to get involved in the Camellian/Kanton War.
        The Kanton Federation: See below
            Contributions:
                Kilner City: Supplies most of the funds and supplies for the war effort.
                Rooibos Polis: Organized the legal documents of the Kanton Federation, sends delegates and diplomats in attempt to resolve the conflict
                The State of Shennong: Militaristic state that deals with most of the manpower and war strategy.
            Tensions/Issues:
                Kilner City: Considers the Federation to be a distasteful, temporary arrangement that should quickly resolve the war so they can go back to pretending to be better than everyone else
                Rooibos Polis: Rooibos Polis cannot afford and is not prepared for an all-out-war, hence the focus on diplomacy. Of the Federation, they are the smallest (and weakest) party, and are worried that they will be taken over by their allies.
                The State of Shennong: Their economy has become reliant on most of the population being enlisted in the military, and in exchange being given goods for free from Kilner City. They cannot afford to end the war, lest their economy collapse.
*/
const storyData = {
    start: {
        text: "Would you like to read the overview of the story? (It's probably important)",
        choices: [
            {text: "Yes", target: "overview"},
            {text: "No", target: "starting_prompt"}
        ]
    },

    overview: {
        text: "In a continent fraught with war, you are a novice tea merchant (deeefinitely not part of some weird tea cult), with a passion to spread the only things you know: magical tea and unsolicited advice. You firmly believe that the power of tea can solve all world problems. Let's find out if you're right! Travel the world and spread the holy word of tea!",
        choices: [
            {text: "I'm so excited to start!", target: "starting_prompt"}
        ]
    },

    starting_prompt: {
        text: "Now that you are free to bring tea to whomever you wish, what sorts of people deserve your tea (and advice)?",
        choices: [
            {text: "The common, downtrodden folk need my tea in these trying times", target: "town_story"},
            {text: "Only those of noble blood deserve the taste of my tea!", target: "noble_story"}
        ]
    },

    town_story: {
        text: "You travel through the countryside, before settling in a town named [TOWN_NAME]. There you set up your teashop, [SHOP_NAME], that most definitely does not double as a cult outpost.",
        choices: []
    },

    noble_story: {
        text: "How utterly British of you! (affectionately.) But soon enough, you recieve your first royal invitation, from the Assam Kingdom. Do you accept or decline?",
        choices: [
            {text: "Decline", target: "decline_invite"},
            {text: "Accept", target: "assam_arrive"}
        ]
    },

    decline_invite: {
        text: "Didn't you want to serve those of noble blood? This is your chance! Perhaps you are reconsidering?",
        choices: [
            {text: "Reconsider", target: "starting_prompt"},
            {text: "Accept the invitation", target: "assam_arrive"}
        ]
    },

    assam_arrive: {
        text: `Upon arriving in Assam, you are met with an honor guard and brought to the capital city. You are immdediately recieved in the royal palace by Darjee, Sovereign Leader of Assam. A small boy of about nine, with dark hair and soft blue eyes, looks up at you from his comically oversized uniform and cape. 

"Teamaster," he addresses you in a young yet imperious voice, "I have invited you here to offer a deal. I understand that you have only recently reached your current standing in the Cult of the Tea. Young, innovative Teamasters such as you are valuable, oft-overlooked trailblazers. The Kingdom of Assam is offering to give you a fortune, to use as you wish. You can attempt to create new teas, or simply sit in luxury. All I ask for in exchange, is that you regularly perform tea ceremonies for those we request, and you sell your tea exclusively to my kingdom."`,
        choices: [
            {text: "Seems legit! I'll do it.", target: "assam_offer"},
            {text: "This is kinda suspicious, I think I'll pass", target: "assam_dungeon"}
        ]
    },

    assam_offer: {
        text: `Darjee smiles. 

"Excellent. I will have the guards take you to your new residence within my palace. I will summon you and explain in detail the responsibilites of your position as soon as I have a spare moment. But you must excuse me." The young boy begins to walk away, his cape trailing behind him. The guards that escorted you here take you to a beautiful room, decorated with brightly dyed silks. Almost everything is lined with gold. The window lights up the room with a soft glow, and when you look out, you can see the whole city. Beautiful spires and onion domes, marble white and topped with gold, stretch into the sky. People dressed in colorful, fashionable clothes walk in the street or take carriages, making small talk, gossiping, and laughing politely. How do you want to spend your time?`,
        choices: [
            {text: "Just like take a nap or something", target: "darjee_summons"},
            {text: "Explore!", target: "explore_locked"}
        ]
    },

    explore_locked: {
        text: "You try the door, and it is locked.",
        choices: [
            {text: "Ok, I'll just wait", target: "darjee_summons"},
            {text: "This is getting weird, I need to get out", target: "escape_luxury"}
        ]
    },

    escape_luxury: {
        text: "Sounds like a smart choice. (but what about the moneyyyy) How will you attempt your escape?",
        choices: [
            {text: "Jump out the window, a leap of faith!", target: "window_luxury"},
            {text: "Try and make a rope, and climb out the window with it.", target: "rope_luxury"}
        ]
    },

    window_luxury: {
        text: "You take a deep breath in, one last glimpse of the luxury you are giving up, before you dive through the window. You look at the city, glimmering like a sort of paradise that rose from the desert. It truly was beautiful. You begin to fall, wind whistling past your ears. You look beneath you. People small as ants, but far better dressed, walking to and fro. Your gaze is, for some reason, attracted to one specific block of the marble road. It seems to zoom up at you, becoming all you can see. It is entirely unremarkable, as far as marble goes, so why can you not look away? All that exists is you and the block of marble. Nothing else matters. And suddenly, you understand.\n\nSplat.",
        choices: []
    },

    rope_luxury: {
        text: "You find enough silk drapings and bedsheets to make a decently strong rope that is long enough to reach the ground. You begin to climb down, gripping tightly to the bright patterns, being very careful to not look down. Eventually, you feel sand beneath you, and with a sigh of relief you collapse on the ground.",
        choices: []
    },

    darjee_summons: {
        text: `Soon enough, you are escorted by the guards who you are, by now, almost certain are solely assigned to you. As you step into the throne room, the only word you can think is "opulent." Everything is dripping in gold and jewels, from the patterns on the walls to the food on the table. The floor is carved out of the most massive emerald you have ever seen, and it is etched with intricate golden words proclaiming the glory of Assam. The room is illuminated by the golden desert sun, refracted into billions of brilliant colors by the gemstones hung from the ceiling and walls. Finally, your eyes land upon the throne itself. Or rather, the lack thereof. Darjee seemed perched on thin air, idly snacking on olives and taking in your shock with no small amount of amusement. You stand starstruck by the impossibility, before hurriedly remembering to bow. Then, the realization hits. The throne was carved out of a single jewel, like the floor, but was a jewel unlike any you had seen before. It was almost entirely transparent, and you could only barely see its outline if you focused.

"Rise," the tiny king finally says. The words reverberate around the throne room, a masterpiece of acoustic engineering. "You know why I have called you here. Now that you have agreed to work for our mutual benefit, I must explain the extent of your responsibilities. Assam is a strong kingdom, by all measures. We have an excellent military, and a great many goods to trade. Our coffers are never empty, and our people never have to fear from lawlessness or a lack of protection. However, since I have ascended the throne, our fellow States no longer take us seriously. This must change. I believe the best way to achieve this is to display that we have a Teamaster in our employ. When you are called upon, this will be your task: You will be the voice of Assam in the other kingdoms. You will advocate for our interests, and increase our standing with other nations. But above everything else, you MUST NOT bring us into war. We have no desire to enter conflict, especially not now." Hear more about Assam's political situation? It would be good for you to have an understanding of your employer's situation.`,
        choices: [
            {text: "Yes, I must be informed to do my job well.", target: "loredrop"},
            {text: "No, I can figure it out as I go along.", target: "assign_mission_1"}
        ]
    },

    loredrop: {
        text: "Assam's greatest ally is the Camellian Empire, which controls the largest territory and is considered by many as the most powerful State. However, the Camellian Empire recently attempted to attack Kilner City, an independently ruled city that is the greatest trade center in the world. While richer than even Assam, the city does not have military might necessary to resist a full-scale attack from the Camellian Empire. So in response to the Empire's advances, Kilner formed the Kanton Federation with Rooibos Polis and and Shennong State. Together, they have a chance at fighting off the Camellian Empire. The Empire has begun to ask for support in their campaign, especially from their closest ally. Assam must balance keeping the Empire satisfied with the degree of support it recieves, while being careful not to be dragged into the actual conflict themselves. You must assess the situation by attending various meetings with representitives from players in this conflict, and bring information back to Assam so Darjee knows the situation, and can decide the resources that should be given, and to whom.",
        choices: [
            {text: "Great, that makes sense! What's my first mission?", target: "assign_mission_1"}
        ]
    },

    assam_dungeon: {
        text: `Darjee frowns, "What a shame. There are plenty who would have killed to be in your position. But no matter. You will see reason eventually. Until then, you shall simply stay within the dungeon." Before you have the chance to protest (or maybe not, if you're into this), the same honor guard that escorted you here grabs you and deposits you in a dank, stone cell. The bars are rusting, and the window is just a hole carved in the wall. The view's pretty nice, though. Looking out, you can see a slightly gritty, but largely well-maintained city. Despite the generally good conditions, you can hear an odd silence that hangs around the city. People are afraid of something. You, however, have more pressing issues. How are you gonna get out of this cell?`,
        choices: [
            {text: "Whatever, they'll let me out evetually", target: "cell_wait_1"},
            {text: "Oooh, I've always wanted to do an escape sequence!", target: "escape_cell"}
        ]
    },

    cell_wait_1: {
        text: "After a few weeks, Darjee returns with the same offer. Do you accept?",
        choices: [
            {text: "Yes", target: "assam_offer"},
            {text: "No", target: "cell_wait_2"}
        ]
    },

    cell_wait_2: {
        text: "Darjee leaves. Do you want to attempt to escape?",
        choices: [
            {text: "Yes", target: "escape_cell"},
            {text: "No", target: "cell_wait_last"}
        ]
    },

    escape_cell: {
        text: "Sounds like a smart choice. How are you going to make your disappearance?",
        choices: []
    },

    cell_wait_last: {
        text: "How many times are you going to do this? Are you sure you don't want to escape? Your chances are dwindling.",
        choices: [
            {text: "Fine, I'll escape", target: "escape_cell"},
            {text: "Nope, I love prison!", target: "offer_last"}
        ]
    },

    offer_last: {
        text: `Eventually, Darjee returns. 

"You are testing my patience. Never has there been one of common blood who has dared deny me so. You WILL see reason, or you will die." The guards begin to advance towards you, their blades gleaming with light from the window.`,
        choices: [
            {text: "Nothing like the threat of death to make you reconsider!", target: "accept_last"},
            {text: "Guess I'll die!", target: "cell_death"},
            {text: "Oh no! I need to escape!", target: "escape_last"}
        ]
    },

    accept_last: {
        text: `Darjee smiles. "Excellent. I knew you would see reason eventually. I will have the guards take you to your new residence within my palace. I will summon you and explain in detail the responsibilites of your position as soon as I have a spare moment. But you must excuse me." The young boy begins to walk away, his neat cape trailing behind him, contrasting sharply with the dirty floor of your former cell. The guards that... "escorted" you here march you out of prison. When you have been marched down the prison tower, you are brought to the palace proper and taken up a marble spire. You arrive at a beautiful room, decorated with brightly dyed silks. Almost everything lined with gold. The window lights up the room with a soft glow. When you look out, you can see the whole city. Beautiful spires and onion domes, marble white and topped with gold, stretch into the sky. People dressed in colorful, fashionable clothes walk in the street or take carriages, making small talk, gossiping, and laughing politely. How do you want to spend your time?`,
        choices: [
            {text: "Just like take a nap or something", target: "darjee_summons"},
            {text: "Explore!", target: "explore_locked"}
        ]
    },

    escape_last: {
        text: "Took you long enough! There don't seem to be many options though...",
        choices: [
            {text: "Jump through the window!", target: "window_jump"},
            {text: "Make a run for it!", target: "run_for_it"}
        ]
    },

    window_jump: {
        text: "Suddenly, you bolt for the window. You manage to squeeze between two hulking guards, before diving through the window. You look at the city, the same as it had been every time you looked from your cell window. It truly was beautiful. You begin to fall, wind whistling past your ears. You look beneath you. People small as ants, walking to and fro. Your gaze is, for some reason, attracted to one specific part of the cobblestone. It seems to zoom up at you, becoming all you can see. It is entirely unremarkable, so why can you not look away? All that exists is you and the cobblestone. Nothing else matters. And suddenly, you understand.\n\nSplat.",
        choices: []
    },

    run_for_it: {
        text: `You sprint for the door, a mad dash for freedom. The guards, clearly expecting this, catch you easily. Darjee raises his eyebrow. 

"Well?"`,
        choices: [
            {text: "Accept the deal", target: "accept_last"},
            {text: "Accept your fate", target: "cell_death"}
        ]
    },

    cell_death: {
        text: "Wow, that was stupid! When you do not respond, the guards surround you, grinning with a bloody eagerness. They seem to loom larger than life, casting long shadows over you. With a sudden pounce, one lunges for your neck. The crimson sash tied to their arm flares out behind the arc of their blade with a sudden snap. You squeeze your eyes shut, desperately holding out your hands in a futile attempt to block the blade. A flash of red. Then, nothing.",
        choices: []
    },

    assign_mission_1: {
        text: `Darjee announces your first mission. 

"I have often heard of the grand excellence and exquisite taste of tea brewed by a Teamaster. If you would oblige me, I would quite enjoy a chance to try some, myself. This is my first task for you. Do not disappoint me."`,
        choices: [
            {text: "Prepare a hibiscus tea", target: "darjee_hibiscus"},
            {text: "Prepare an olive tea", target: "darjee_olive"},
            {text: "Prepare a black tea", target: "darjee_black"}
        ]
    },

    darjee_black: {
        text: `You settle down to prepare a classic, bitter tea. This tea is one of the first teas you learned to make, and the smell brings back memories of your time in the monastery where you learned your craft. When the water begins to boil, you pour it through the leaves and into a cup. With reverence, you bring the perfectly brewed tea to the boy king sitting on his transparent throne. He inhales, before taking one sip. 

"Bleh! This is the worst thing I have ever tasted! How can you possibly call yourself a Teamaster?! GUARDS! Execute this crime against tea and my tastebuds!" The guards surround you, pressing up against each other to form a tight wall. One swings her axe at your neck in a silvery arc. Your head rolls on the ground, your glassy, disbelieving eyes left staring at the ceiling.`,
        choices: []
    },

    darjee_hibiscus: {
        text: `Staring out into the desert, you think of a tea that originated in this part of the continent. Procuring some hibiscus from your pockets, you begin boiling water to extract their flavor. When you bring the tea to Darjee, he smiles at what must be a familiar scent. He closes his eyes as he sips, savoring the flavor. 

"Truly, your Order's reputation does not do you justice. This is the finest tea I have ever had the privilege of drinking. I thank you deeply."`,
        choices: []
    },

    darjee_olive: {
        text: `The boy king's snack made you think of making something... unconventional. You drop olives into boiling water. When the steeping is over, you have created a sweet, aromatic tea unlike anything you have ever tasted. Darjee gives the tea one sniff, and his eyes widen in shock. 

"Wha... How did you..." he gaped, before downing the whole cup of boiling water in one gulp. "That was... the absolute best thing I have ever tasted! I do not think I could drink tea ever again, because all others pale in comparison to this one."`,
        choices: []
    }
};

const storyContainer = document.getElementById("story-container");

function showScene(sceneId) {
    const scene = storyData[sceneId];
    if (!scene) return;

    // Disable previous choice buttons
    const oldButtons = storyContainer.querySelectorAll("button");
    oldButtons.forEach(button => {
        button.disabled = true;
    });

    // Create scene elements
    const sceneBlock = document.createElement("div");
    sceneBlock.className = "scene-block";

    const textElement = document.createElement("p");
    textElement.innerText = scene.text;
    sceneBlock.appendChild(textElement);

    const choicesContainer = document.createElement("div");
    choicesContainer.className = "choices-container";

    scene.choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice.text;
        button.onclick = () => showScene(choice.target);
        choicesContainer.appendChild(button);
    });

    sceneBlock.appendChild(choicesContainer);
    storyContainer.appendChild(sceneBlock);
}

// Start game
showScene("start");