// 1. Initialize the map in your 'smallMap' div
        // Make sure the ID here matches the ID of your HTML div
        const map = L.map('smallMap').setView([28.6139, 77.2088], 12); // New Delhi coordinates, Zoom 12
    

        // 2. Add a Tile Layer (OpenStreetMap)
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        // 3. (Optional) Add a Marker
        L.marker([28.6139, 77.2088]).addTo(map)
            .bindPopup("You're here!")
            .openPopup();

        // 4. (Optional) Invalidate size if map container changes dynamically
        // This is good practice if your map container might be hidden or change size after initialization
        // For a static small map, it might not be strictly necessary immediately, but good to know.
        // map.invalidateSize();