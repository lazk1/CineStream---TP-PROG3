export const storage = {
    // Guardar favoritos
    saveFavorites(favorites) {
        localStorage.setItem('cineStreamFavorites', JSON.stringify(favorites));
    },

    // Obtener favoritos
    getFavorites() {
        const favorites = localStorage.getItem('cineStreamFavorites');
        return favorites ? JSON.parse(favorites) : [];
    },

    // Agregar a favoritos
    addToFavorites(item) {
        const favorites = this.getFavorites();
        const exists = favorites.find(fav => fav.id === item.id && fav.type === item.type);
        
        if (!exists) {
            favorites.push(item);
            this.saveFavorites(favorites);
        }
        return favorites;
    },

    // Remover de favoritos
    removeFromFavorites(itemId, type) {
        let favorites = this.getFavorites();
        favorites = favorites.filter(fav => !(fav.id === itemId && fav.type === type));
        this.saveFavorites(favorites);
        return favorites;
    },

    // Verificar si es favorito
    isFavorite(itemId, type) {
        const favorites = this.getFavorites();
        return favorites.some(fav => fav.id === itemId && fav.type === type);
    }
};
