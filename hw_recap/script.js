const link =
	'https://data.ibb.gov.tr/dataset/bd3b9489-c7d5-4ff3-897c-8667f57c70bb/resource/6800ea2d-371b-4b90-9cf1-994a467145fd/download/salk-kurum-ve-kurulularna-ait-bilgiler.json';

const createListElement = (
	props,
	event = () => {
		console.log('event');
	}
) => {
	const listElementContainer = document.createElement('div');
	listElementContainer.classList.add('list-element');
	listElementContainer.innerText = props.ADI;
	listElementContainer.addEventListener('click', (e) => {
		event(props);
	});
	return listElementContainer;
};

let index = 0;
let dataArray
const listSection = document.getElementById('list-section');
const detailSection = document.getElementById('detail-section');

const displayDataOnDetail = (props) => {
	const dataNameHeader = document.getElementById('data-name');
	const dataLongitudeHeader = document.getElementById('data-longitude');
	const dataLatitudeHeader = document.getElementById('data-latitude');
	const dataAddressHeader = document.getElementById('data-address');
	dataNameHeader.innerText = props.ADI;
	dataLatitudeHeader.innerText = props.ENLEM;
	dataLongitudeHeader.innerText = props.BOYLAM;
	dataAddressHeader.innerText = props.ADRES;
	index = props.elemIndex;
};

const goForward = () => {
  const newIndex = Math.min(index + 1, dataArray.length -1) 
  displayDataOnDetail({...dataArray[newIndex], elemIndex :newIndex})
};

const goBackward = () => {
  const newIndex = Math.max(index - 1, 0) 
  displayDataOnDetail({...dataArray[newIndex], elemIndex :newIndex})
};

const goForwardButton = document.getElementById('forward-button');
const goBackwardButton = document.getElementById('backward-button');

goForwardButton.addEventListener('click', goForward);
goBackwardButton.addEventListener('click', goBackward);

fetch(link, {
	method: 'GET',
	mode: 'cors',
	cache: 'no-cache',
})
	.then((response) => response.json())
	.then((data) => {
    dataArray = data
		data.forEach((element, elemIndex) => {
			const elem = createListElement({ ...element, elemIndex }, displayDataOnDetail);
			listSection.append(elem);
		});
		console.log(data);
	});
