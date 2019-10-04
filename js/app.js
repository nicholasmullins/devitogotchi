console.log("testing");


const pet = {
	name: 'Danny',
	age: 0,
	energy: 100, 
	hunger: 100,
	fun: 100

}



var image_tracker = 'green';



let energyLevel = setInterval(decreaseEnergy, 2000);
let hungerLevel = setInterval(decreaseHunger, 2000);
let funLevel = setInterval(decreaseFun, 2000);
let ageLevel = setInterval(increaseAge, 20000);
let animatedPet = setInterval(movePet, 1000); 

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
}

// movePet();
// decreaseEnergy();
// decreaseHunger();
// decreaseFun();

$('#wakeUp').on('click', () => {
	let energyLevel = setInterval(decreaseEnergy, 2000);
	let hungerLevel = setInterval(decreaseHunger, 2000);
	let funLevel = setInterval(decreaseFun, 2000);
	let ageLevel = setInterval(increaseAge, 20000);
	let animatedPet = setInterval(movePet, 1000); 
})




function goToSleep() {
	clearInterval(animatedPet);
	clearInterval(energyLevel);
	clearInterval(funLevel);
	clearInterval(hungerLevel);
	$('#column2').css('background-blend-mode', 'multiply');
	$('#stickMan').attr('src', '/Users/home/sei-cranberry-gobblers/devitogotchi/images/sleep.png');
	pet.energy = 100;
};



$('#wakeUp').on('click', () => {
	movePet();
	decreaseEnergy();
	decreaseHunger();
	decreaseFun();
})



$('#goBed').on('click', () => {
	goToSleep();
});	

$('#giveFood').on('click', () => {
	if (pet.hunger < 100) {
		pet.hunger +=10;
		$('#hungerMeter').css('width', `${pet.hunger}%`);
	} else if (pet.hunger > 100) {

	};	
});	

$('#letsPlay').on('click', () => {
	$('#stickMan').attr('src', '/Users/home/sei-cranberry-gobblers/devitogotchi/images/why.png');
	if (pet.fun < 100) {
		pet.fun +=10;
		$('#funMeter').css('width', `${pet.fun}%`);
	} else if (pet.fun > 100) {

	};
	
});	















// $('img').on('click', () => {
// 	$('#stickMan').attr('src', '/Users/home/sei-cranberry-gobblers/devitogotchi/images/why.png');
// 	return false;

// });	







// // };

