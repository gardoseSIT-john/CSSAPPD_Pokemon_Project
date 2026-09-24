import { Service, Injectable,signal } from '@angular/core';

@Service()
export class TrainerService {


    // I assume this will now become the main storage for the Trainers
    // Data now... SOooo

    private hoennRegistry = signal([
         //WE need the following: Name, Specialty, Town, 
            // Pokemon Team, The Badge
        {
            name: 'Roxanne',
            town: 'Rustboro City',
            specialty: 'Rock',
            badge: 'Stone Badge',
            team: ['Geodude','Nosepass']

        },
        {
            name: 'Brawly',
            town: 'Dewford Town',
            specialty: 'Fighting',
            badge: 'Knuckle Badge',
            team: ['Makuhita','Meditite']
        },
        {
            name: 'Wattson',
            town: 'Mauville City',
            specialty: 'Electric',
            badge: 'Dynamo Badge',
            team: ['Magnemite','Voltorb']
        }
        //Add others layer, this is for test only
    ])
    //Add the other regions later.


    //Lets expose them
    hoennLeaders = this.hoennRegistry.asReadonly();
    

}
