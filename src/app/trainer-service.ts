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
            team: ['Geodude','Nosepass'],
            motto: 'This is a test motto',
            description: 'THis is a test Description'

        },
        {
            name: 'Brawly',
            town: 'Dewford Town',
            specialty: 'Fighting',
            badge: 'Knuckle Badge',
            team: ['Makuhita','Meditite'],
            motto: 'This is a test motto',
            description: 'THis is a test Description'
        },
        {
            name: 'Wattson',
            town: 'Mauville City',
            specialty: 'Electric',
            badge: 'Dynamo Badge',
            team: ['Magnemite','Voltorb'],
            motto: 'This is a test motto',
            description: 'THis is a test Description'
        }
        //Add others layer, this is for test only
    ])
    //Add the other regions later.


    //Lets expose them
    hoennLeaders = this.hoennRegistry.asReadonly();
    

}
