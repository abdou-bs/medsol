function generateVerificationCode() {
    // Générer un code de vérification aléatoire
    var code = Math.floor(1000 + Math.random() * 9000);
    
    // Afficher le code généré dans le champ de saisie
    document.getElementById('verificationCode').value = code;
  }
  
  function validateForm() {
    // Récupérer les valeurs saisies par l'utilisateur
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('password2').value;
    var enteredVerificationCode = document.getElementById('enteredVerificationCode').value;
    var generatedVerificationCode = document.getElementById('verificationCode').value;
    
    // Vérifier si les champs sont vides

    // username

    if(username=== ""){
       alert('usename ne peux pas etre vide');
       return false;
    }else{
        let lett=username.length;
        if(lett < 4){
            alert('username doit avoir au moins trois carectaire ');
            return false;
        }
    }

    // email

    if(email=== ""){
        alert('email ne peux pas etre vide');
        return false;
     }else{
         
         if(mailvr(email)){
             alert('email non valide ');
             return false;
         }
     }
     function mailvr(email){
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,4}$/.test(email)
     }

     //password

     if(password=== ""){
        alert('password ne peux pas etre vide');
        return false;
     }
     if(confirmPassword=== ""){
        alert('confirmPassword ne peux pas etre vide');
        return false;
     }

    if ( enteredVerificationCode === '') {
      alert('le code de verification ne peux pas etre vide');
      return false;
    }
    
    // Vérifier si les mots de passe correspondent
    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas.');
      return false;
    }
    
    // Vérifier si le code de vérification est correct
    if (enteredVerificationCode !== generatedVerificationCode) {
      alert('Le code de vérification est incorrect.');
      return false;
    }
    
    // Validation réussie
    alert('Inscription réussie !');
    return true;
  }