function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    
    // Guardar preferencia en memoria
    const isDark = document.body.classList.contains('dark-mode');
    // No usamos localStorage, solo mantiene el estado durante la sesión
}