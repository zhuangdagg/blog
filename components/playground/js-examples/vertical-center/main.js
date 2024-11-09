console.log('js playground working normal')

const parentDom = document.querySelector('.parent');
const childDom = document.querySelector('.child');

if(!parentDom || !childDom) {
    console.log('Can\'t find target dom!');
}

handleSelect(1);

function selectMethod(dom) {
    if(!dom) return
    handleSelect(dom.value)
}

function handleSelect(method) {
    let classNames = `parent method-${method}`
    parentDom.setAttribute('class', classNames);
}