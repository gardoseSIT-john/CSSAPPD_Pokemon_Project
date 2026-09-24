import { Component, signal } from '@angular/core';
import { LeaderInfo } from '../leader-info/leader-info';

@Component({
  imports: [LeaderInfo],
  selector: 'app-kanto',
  styleUrl: './kanto.css',
  templateUrl: './kanto.html',
})
export class Kanto {

  regionData = signal([
    {
      name: 'Brock',
      age: 15,
      location: 'Pewter City',
      pokemonTeam: 'Geodude, Onix',
      gymBadge: 'Boulder Badge',
      description: '"My defense is impenetrable, my will is unyielding. I am the bedrock of Pewter City!" ---- Known as the Rock-Solid Pokémon Trainer, Brock is a serious but deeply caring leader who took over the gym to support his many younger siblings. He prefers the defensive and raw physical enduring traits of Rock-type Pokémon, warning challengers: You think you can just breeze through here with a typing advantage? You have got a lot to learn about raw endurance. My Pokémon are carved out of stone. We weather the fiercest storms, take the heaviest hits, and still stand tall. Show me if your determination is harder than my Onix!'
    },

    {
      name: 'Misty',
      age: 10,
      location: 'Cerulean City',
      pokemonTeam: 'Staryu, Starmie',
      gymBadge: 'Cascade Badge',
      description: 'Beautiful and blue, but ready to wash you away! Fear the tomboyish mermaid! ---- Self-proclaimed as the Tomboyish Mermaid, Misty is a fiery, fiercely competitive Water-type master who trains constantly to step out of the shadow of her three older, glamorous sisters. She warns challengers not to let her appearance fool them: Don not let the swimsuit fool you—I do not play around when it comes to Water Pokémon! They are fluid, graceful, and absolutely devastating when they crash over you. If you do not take me seriously, you are going to drown in defeat. Let us see if you can handle the pressure!'
    },

    {
      name: 'Lt. Surge',
      age: 30,
      location: " Vermilion City",
      pokemonTeam: "Voltorb, Pikachu, Magneton, and Raichu",
      gymBadge: "Thunder Badge",
      description: "Self-proclaimed as the Tomboyish Mermaid, Misty is a fiery, fiercely competitive Water-type master who trains constantly to step out of the shadow of her three older, glamorous sisters. She warns challengers not to let her appearance fool them: Don not let the swimsuit fool you—I do not play around when it comes to Water Pokémon! They are fluid, graceful, and absolutely devastating when they crash over you. If you do not take me seriously, you are going to drown in defeat. Let us see if you can handle the pressure! ---- The Lightning Lieutenant, Lt. Surge is a towering, strict American military veteran who fought in wars utilizing Electric-type Pokémon, valuing raw power and aggressive speed while rigging his gym with hidden trash-can puzzles. He welcomes challengers aggressively: Hey there, kid! You think you are ready for a real battle? Back in the war, my Electric Pokémon saved my skin. They have got speed, they have got power, and they will zap you before you even know what hit you! You are locked into my arena now. Let us see if you can handle a million volts!"
    },
    
    {
      name: 'Erika',
      age: 20,
      location: "Celadon City",
      pokemonTeam: "Victreebel, Tangela, Vileplume",
      gymBadge: "Rainbow Badge",
      description: "A serene mind brings a beautiful victory. Nature always prevails. ---- The Nature-Loving Princess, Erika is a soft-spoken, elegant master of Japanese flower arrangement (Ikebana) and traditional archery who exclusively uses Grass-type Pokémon and structures her gym like a tranquil greenhouse. She greets challengers gracefully: Welcome to my sanctuary. The aroma of the flowers is lovely today, is not it? But do not let the tranquility lull you into a false sense of security. Nature can be just as hazardous as it is beautiful. My Grass Pokémon will wrap you in vines and put your ambitions to sleep."
    },

    {
      name: 'Koga',
      age: 40,
      location: "Fuchsia City",
      pokemonTeam: "Koffin, Muk, Weezing",
      gymBadge: "Soul Badge",
      description: "Infiltration, intoxication, and absolute isolation. You cannot strike a shadow. ----  A master ninja known as the Sacred Poisonous Ninja, Koga utilizes illusionary invisible walls, trickery, and toxic Poison-type Pokémon to slowly wear down his opponents through debilitating status conditions. He taunts challengers who find him: Fwahahaha! You managed to navigate my invisible walls, challenger? Impressive. But your luck ends here. The art of the ninja is the art of deception. Before you even realize you have been struck, my Poison Pokémon will have already sealed your fate. Fade into the darkness!"
    },
    
    {
      name: 'Sabrina',
      age: 20,
      location: " Saffron City",
      pokemonTeam: "Kadabra, Mr. Mime, Alakazam",
      gymBadge: "Marsh Badge",
      description: "I foresaw your defeat before you walked through the door. Fate is absolute. ---- The Master of Psychic Pokémon, Sabrina is a cold, emotionally detached woman born with immense, innate telekinetic powers whose disorienting warp-tile gym and devastating Psychic team stand as a massive hurdle. She speaks distantly to challengers: I do not like to talk... it disrupts my focus. I have had psychic powers since I was a child, and I dislike conflict that lacks true mastery. My Pokémon and I think as one. Your movements are predictable, your strategies are clumsy, and your loss is already guaranteed. Prepare to be crushed."
    },
    
    {
      name: 'Blaine',
      age: 60,
      location: "Cinnabar Island Gym",
      pokemonTeam: "Growlithe, Ponyta, Rapidash, Arcanine",
      gymBadge: "Volcano Badge",
      description: "You had better have Burn Heal ready, because my passion is an inferno! ---- Known as the Hotheaded Quiz Master, Blaine is a brilliant, eccentric scientist and Fire-type fanatic who requires challengers to answer quirky Pokémon trivia riddles to open the doors leading to his battlefield. He fires up before the match: Hah! You solved my quizzes, did you? But you have not solved me! My Fire Pokémon pack more heat than the volcano outside. We burn bright, we strike fast, and we leave nothing but ash in our wake! Show me your burning desire to win, or get scorched!"
    },
    
    {
      name: 'Giovanni',
      age: 40,
      location: "Viridian City Gym",
      pokemonTeam: "Rhyhorn, Dugrio, Nidoqueen, Nidoking Rhydon",
      gymBadge: "Earth Badge",
      description: "Power is the only metric that matters. Bow before the absolute ruler. ---- Ostensibly the Ground-Shaking Ruler of the Viridian Gym, Giovanni hides a dark double-life as the ruthless supreme leader of Team Rocket, relying on heavy, crushing Ground-type forces to intimidate and overpower challengers. He states coldly: Welcome to my Gym. This is my true fortress. I am the master of Ground Pokémon, the very earth you stand upon. Every tremor obeys my command. You dare challenge Team Rocket’s architect? I will crush your naive dreams into dust under the weight of my Pokémon!"
    }
  ]);

}