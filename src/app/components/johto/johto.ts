import { Component, signal } from '@angular/core';
import { LeaderInfo } from '../leader-info/leader-info';

@Component({
  imports: [LeaderInfo],
  selector: 'app-johto',
  styleUrl: './johto.css',
  templateUrl: './johto.html',
})
export class Johto {

  regionData = signal([
    {
      name: 'Falkner',
      age: 18,
      location: 'Violet City',
      pokemonTeam: 'Pidgey, Pidgeotto',
      gymBadge: 'Zephyr Badge',
      description: 'The sky knows no limits, and neither does the majesty of Bird ---- A passionate young trainer who inherited his position, Falkner fiercely defends Flying-type Pokémon against critics who claim they have too many type weaknesses, utilizing swift aerial maneuvers. He declares proudly: People say you can clip the wings of a Bird Pokémon with a simple electric shock or a rock. I will prove them all wrong! My father taught me the true grandeur of the skies. We fly higher, strike swifter, and rule the wind. Prepare to be blown away!'
    },

    {
      name: 'Bugsy',
      age: 14,
      location: 'Azalea Town',
      pokemonTeam: 'Metapod, Kakuna, Scyther',
      gymBadge: 'Hive Badge',
      description: 'Small, fierce, and full of surprises! Never underestimate a Bug! ---- Known as the Walking Bug Encyclopedia, Bugsy is a young prodigy whose extensive research has led to the discovery of hidden moves, utilizing tough carapaces and quick attacks to catch challengers off guard. He says enthusiastically: Hi there! I might look young, but I know everything there is to know about Bug Pokémon. I discovered hidden moves all by myself! People think bugs are weak, but their carapaces are tough and their scythes are razor-sharp. Let me show you the ultimate synergy of the forest!'
    },

    {
      name: 'Whitney',
      age: 16,
      location: 'Goldenrod City',
      pokemonTeam: 'Clefairy, Miltank',
      gymBadge: 'Plain Badge',
      description: 'Cute, cuddly, and utterly unstoppable! Rollout, let us go! ---- Whitney is an energetic, highly emotional leader whose Normal-type Pokémon appear deceptively sweet but hide devastating, momentum-based strategies like the infamous Rollout attack. She bubbles with energy before the fight: Hi! Everyone says my Normal Pokémon are just adorable, but do not think we are push-overs! We have tricks you would never expect. Once my Miltank gets moving, nothing in this world can stop her momentum! Do not you dare make me cry, okay? Let us battle!'
    },

    {
      name: 'Morty',
      age: 18,
      location: 'Ecruteak City',
      pokemonTeam: 'Gastly, Haunter, Gengar',
      gymBadge: 'Fog Badge',
      description: 'Peering into the future, speaking with the past. The spirits guide my path. ----  Known as the Mystic Seer, Morty has spent his life training in isolation in Ecruteak, possessing the ability to see spirits and using Ghost-type Pokémon to bypass physical defenses and haunt the mind. He intones mystically: I have spent my entire life training in isolation here in Ecruteak, waiting for a trainer of destiny. I see things others cannot. My Ghost Pokémon do not just attack your body; they haunt your mind and bypass your physical defenses. Can you strike what is not truly there?'
    },

    {
      name: 'Chuck',
      age: 40,
      location: 'Cianwood City',
      pokemonTeam: 'Primeape, Poliwrath',
      gymBadge: 'Storm Badge',
      description: 'No pain, no gain! Flex your muscles and fight with your heart! ---- A booming, hyper-masculine martial artist, Chuck trains right alongside his Fighting-type Pokémon beneath raging waterfalls, valuing raw physical power and direct, honorable combat over tactical tricks. He bellows to challengers: Gwahahaha! I eat, sleep, and breathe training! I even roar at the roaring waterfalls! Fighting Pokémon are the pinnacle of physical perfection. We do not hide behind status tricks—we trade blows until only the strongest is left standing. Give me everything you have got!'
    },

    {
      name: 'Jasmine',
      age: 15,
      location: 'Olivine City',
      pokemonTeam: 'Magnemite, Steelix',
      gymBadge: 'Mineral Badge',
      description: 'Clad in iron, sparkling with hope. True strength is protecting the weak.  ---- Jasmine is a quiet, deeply compassionate leader who initially refuses to battle until the sick Ampharos in the local lighthouse is cured, shifting from her gentle demeanor to a resilient Steel-type specialist in battle. She speaks softly but firmly: Um... thank you for helping the Pokémon in the lighthouse. But now that I am back in my Gym, I must show you my true resolve. I use the Steel type. It is cold, it is heavy, and it is completely unbreakable. We are ready to test your offenses. Please, do not hold back.'
    },

    {
      name: 'Pryce',
      age: 70,
      location: 'Mahogany Town',
      pokemonTeam: 'Seel, Dewgong, Piloswine',
      gymBadge: 'Glacier Badge',
      description: 'Time freezes for no one, but my ice will freeze you solid.  ----  Known as the Winter Veteran, Pryce has spent over half a century training alongside Ice-type Pokémon, learning how to survive the harshest environments and striking with absolute, calculated precision. He observes the challenger coldly: I have lived and trained alongside Pokémon for over fifty years. I have seen trainers come and go like the changing seasons. The bitter cold teaches you how to survive, how to endure, and how to strike with absolute precision. Show me if the heat of your youth can thaw my frozen defenses.'
    },

    {
      name: 'Clair',
      age: 20,
      location: 'Blackthorn City',
      pokemonTeam: 'Dragonair, Dragonair, Kingdra',
      gymBadge: 'Rising Badge',
      description: 'The blood of dragons flows through me. I accept nothing less than perfection. ---- The confident and fiercely prideful Dragon Vanguard, Clair holds the elite lineage of Blackthorn City and commands powerful, mythical Dragon-type Pokémon, refusing to hand over her badge until challengers pass an additional test. She boasts before the match: I am the world s greatest Dragon master, holding the lineage of Blackthorn City! Dragons are mythical, holy, and completely superior creatures. I do not care how many badges you have collected—you are standing before the ultimate test of a champion. Behold the wrath of the dragon!'
    }
  ]);

}