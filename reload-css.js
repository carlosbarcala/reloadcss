function reloadCSS() {
    var queryString = '?reload=' + new Date().getTime();
    var head = document.getElementsByTagName('head')[0];
    var links = document.getElementsByTagName('link');
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        if (link.rel === 'stylesheet') {
            link.href = link.href.replace(/\?.*|$/, queryString);
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {

    var button = document.createElement('button');
    button.innerHTML = 'Reload CSS';
    button.style.position = 'fixed';
    button.style.bottom = '10px';
    button.style.right = '10px';
    button.style.zIndex = '9999';
    button.style.padding = '10px';
    button.style.fontSize = '14px';
    button.style.fontFamily = 'sans-serif';
    button.style.color = '#fff';
    button.style.backgroundColor = '#000';
    button.style.border = 'none';
    button.style.outline = 'none';
    button.style.cursor = 'pointer';
    button.style.opacity = '0.5';
    button.style.transition = 'opacity 0.3s ease-in-out';
    button.addEventListener('mouseover', function() {
        button.style.opacity = '1';
    });
    button.addEventListener('mouseout', function() {
        button.style.opacity = '0.5';
    });
    document.body.appendChild(button);

    button.addEventListener('click', function() {
        reloadCSS();
    });
});
