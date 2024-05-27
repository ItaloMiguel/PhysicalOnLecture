class SearchBar {
    search() {
        document.addEventListener('DOMContentLoaded', (event) => {
            const formSearch = document.getElementById('formSearch');
        
            formSearch.addEventListener('submit', function(event) {
                event.preventDefault();
                const searched = document.getElementById('searched').value;
            
                console.log('Pesquisado: ', searched);
            });
        });    
    }
}
 
export default new SearchBar().search();;