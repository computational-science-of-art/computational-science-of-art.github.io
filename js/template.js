function header(){
    var html = "";
    html += '<nav class="navbar navbar-default">';
    html += '<div class="container-fluid">';
    html += ' <!-- Brand and toggle get grouped for better mobile display -->';
    html += '<div class="navbar-header">';
    html += '        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">';
    html += '          <span class="sr-only">Toggle navigation</span>';
    html += '          <span class="icon-bar"></span>';
    html += '          <span class="icon-bar"></span>';
    html += '<span class="icon-bar"></span>';
    html += '</button>';
    html += '        <a class="navbar-brand" href="contact.html">The Society of Computational Science of Art</a>';
    html += '</div>';          
    html += '<!-- Collect the nav links, forms, and other content for toggling -->';
    html += '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">';
    html += '        <ul class="nav navbar-nav">';
    html += '          <li><a href="index.html">Top </a></li>';
    html += '<li><a href="about.html">About</a></li>';
    html += ' <li><a href="member.html">Member </a></li>';
    html += '<li><a href="contact.html">Contact </a></li>';
    html += '</ul>';
    html += '<form class="navbar-form navbar-right" role="search">';
    html += '<div class="form-group">';
    html += '            <input type="text" class="form-control" placeholder="Search">';
    html += '</div>';
    html += '          <button type="submit" class="btn btn-default">Submit</button>';
    html += '</form>';
    html += '</div><!-- /.navbar-collapse -->';
    html += '</div><!-- /.container-fluid -->';
    html += '</nav>';
   document.write(html);

}
