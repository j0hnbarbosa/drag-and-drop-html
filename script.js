
const handleDragStart = (e) => {
  e.dataTransfer.setData("text", e.target.id);
  console.log('handleDragStart', e);
};

const handleDragOver = (e) => {
  e.preventDefault();
  console.log('handleDragOver()', e);
};

const handleDrop = (e) => {
  e.preventDefault();
  
  console.log('handleDrop()', e);

  const data = e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(data));
};