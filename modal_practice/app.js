//create modal and insert it as first child of body
const modal = document.createElement('div');
modal.setAttribute('id', 'modal');
document.body.insertBefore(modal, document.body.firstChild);

//create open button
const openBtn = document.createElement('button');
openBtn.setAttribute('class', 'modal-buttons');
openBtn.innerHTML = 'About the Game';
//add open button as first child of body
document.body.insertBefore(openBtn, document.body.firstChild);

//create textbox and append it to modal
const modalTextbox = document.createElement('div');
modalTextbox.setAttribute('id', 'modal-textbox');
modal.appendChild(modalTextbox);

//create header and append
const modalHeader = document.createElement('h1');
modalHeader.innerHTML = 'Learn to Play Bridge';
modalTextbox.appendChild(modalHeader);

const modalInfo = [
	'Bridge is played with four people sitting at a card table using a	standard deck of 52 cards (no jokers). The players across from each		other form partnerships as North‑South and East‑West.',
	'Draw cards to select the person to deal the cards (the dealer). This person distributes the cards face down, in clockwise rotation one at a time, until each player at the table has a hand consisting of 13 cards.',
	'After the play of each deal is completed, the opportunity to deal moves around the table clockwise so that each person has a turn to deal out the cards.'
];

//iterate over the modal info and generate p elements and add them to modal-textbox
modalInfo.forEach(el => {
	const p = document.createElement('p');
	p.innerHTML = el;
	modalTextbox.appendChild(p);
});

//make modal footer and append it
const modalFooter = document.createElement('div');
modalFooter.setAttribute('id', 'modal-footer');
modalTextbox.appendChild(modalFooter);

//make close button and append it
const closeBtn = document.createElement('button');
closeBtn.setAttribute('id', 'close');
closeBtn.setAttribute('class', 'modal-buttons');
closeBtn.innerHTML = 'Close';
modalTextbox.appendChild(closeBtn);

// Function to change modal display to 'block'
const openModal = () => {
	modal.style.display = 'block';
};

// Event handler to close the modal
const closeModal = () => {
	modal.style.display = 'none';
};

//add event listeners to open and close buttons
openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

//open modal if no click for 5 seconds
setInterval(openModal, 5000);
