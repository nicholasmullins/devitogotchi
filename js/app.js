console.log("testing");


const pet = {
	name: 'Danny',
	age: 0,
	energy: 100, 
	hunger: 100,
	fun: 100

}



var image_tracker = 'green';
var image_tracker2 = 'green';



let energyLevel = setInterval(decreaseEnergy, 2000);
let hungerLevel = setInterval(decreaseHunger, 2000);
let funLevel = setInterval(decreaseFun, 2000);
let ageLevel = setInterval(increaseAge, 5000);
let animatedPet = setInterval(movePet, 1000); 
let animatedMorph = setInterval(moveMorphPet, 1000);
let deathCheck = setInterval(checkForDeath, 1000);



function decreaseEnergy() {
	pet.energy -= 5;
	$('#energyMeter').css('width', `${pet.energy}%`);
};


function decreaseHunger() {
	pet.hunger -= 5;
	$('#hungerMeter').css('width', `${pet.hunger}%`);
};

function decreaseFun() {
	pet.fun -= 5;
	$('#funMeter').css('width', `${pet.fun}%`);
};

function increaseAge() {
	pet.age += 1;
	$('#ageMeter').html(pet.age);
};


function movePet() {
 	
 	if(image_tracker=='green'){
 		$('#stickChange').html('<img id="stickMan" src="/Users/home/sei-cranberry-gobblers/devitogotchi/images/leftside.png">');

 		console.log('yes');
 		image_tracker='red';
 	} else if (image_tracker == 'blue'){
 		$('#stickChange').html('<img id="stickMan" src="/Users/home/sei-cranberry-gobblers/devitogotchi/images/happy.png">');
 		image_tracker='green';
 		console.log('no'); 
	} else if (image_tracker == 'red'){
		$('#stickChange').html('<img id="stickMan" src="/Users/home/sei-cranberry-gobblers/devitogotchi/images/rightside.png">');
 		image_tracker='blue';
 		console.log('maybe')
	} 

	
};


function moveMorphPet () {
if (pet.age > 2) {
		clearInterval(animatedPet)			
		if(image_tracker2 =='green'){
 		$('#stickChange').html('<img id="stickMan" src="/Users/home/sei-cranberry-gobblers/devitogotchi/images/devitofullleft.png">');
 		image_tracker2='red';
 	} else if (image_tracker2 == 'red'){
 		$('#stickChange').html('<img id="stickMan" src="/Users/home/sei-cranberry-gobblers/devitogotchi/images/devitofullright.png">');
 		image_tracker2='green';		
	} 
};
};

$('#wakeUp').on('click', () => {
	let energyLevel = setInterval(decreaseEnergy, 2000);
	let hungerLevel = setInterval(decreaseHunger, 2000);
	let funLevel = setInterval(decreaseFun, 2000);
	let ageLevel = setInterval(increaseAge, 20000);
	
	if (pet.age < 2) {
	let animatedPet = setInterval(movePet, 1000); 
	} else {
    let animatedMorph = setInterval(moveMorphPet, 1000);
	}
	$('#column2').css('background-blend-mode', '');
});


function checkForDeath() {


if (pet.energy < 1) {
	alert('Devito has died of exhaustion')
	console.log('he is dead')
	clearInterval(deathCheck);
	clearInterval(ageLevel);
	clearInterval(energyLevel);
	clearInterval(funLevel);
	clearInterval(hungerLevel);
} else if (pet.fun < 1) {
	alert('Devito has died of boredom')
	clearInterval(energyLevel);
	clearInterval(funLevel);
	clearInterval(hungerLevel);
	clearInterval(deathCheck);
	clearInterval(ageLevel);
} else if (pet.hunger < 1) {
	alert('Devito has died of hunger')
	clearInterval(energyLevel);
	clearInterval(funLevel);
	clearInterval(hungerLevel);
	clearInterval(deathCheck);
	clearInterval(ageLevel);
	
};

};

$('#goBed').on('click', () => {
	clearInterval(energyLevel);
	clearInterval(funLevel);
	clearInterval(hungerLevel);
	if (pet.age < 2) {
		clearInterval(animatedPet); 
	} else {
    	clearInterval(animatedMorph);
	};
	$('#column2').css('background-blend-mode', 'multiply');
	$('#stickMan').attr('src', '/Users/home/sei-cranberry-gobblers/devitogotchi/images/sleep.png');
	pet.energy += 20;
	$('#energyMeter').css('width', `${pet.energy}%`);
});	


$('#giveFood').on('click', () => {
	if (pet.hunger < 100) {
		pet.hunger +=10;
		$('#hungerMeter').css('width', `${pet.hunger}%`);
	} else if (pet.hunger > 100) {

	};	
});	

$('#letsPlay').on('click', () => {
	if (pet.fun < 100) {
		pet.fun +=10;
		$('#funMeter').css('width', `${pet.fun}%`);
	} else if (pet.fun > 100) {

	};
	
});	









