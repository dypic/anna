document.getElementById('openFilter').addEventListener('click', () => {
    document.getElementById('sidefilter').classList.add('on');
    document.querySelector('body').style.overflow = 'hidden';
})
document.getElementById('closeFilter').addEventListener('click',function(){
    document.getElementById('sidefilter').classList.remove('on');
    document.querySelector('body').style.overflow = 'auto';
})
document.getElementById('openDepth2').addEventListener('click',function(){
    this.classList.toggle('on');
    this.nextElementSibling.classList.toggle('on');
})