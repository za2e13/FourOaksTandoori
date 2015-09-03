var total = true;

function addElement(ID, Name, Price){
	
		var removeButton = document.createElement("span");
	    var attribute = document.createAttribute("class");
	    var onclick = document.createAttribute("onclick");
	    attribute.value = "btn btn-danger glyphicon glyphicon-minus";
	    var perameters = ID+",\'"+Name+"\',"+Price;
	    onclick.value = "removeItem("+perameters+")";
	    removeButton.setAttributeNode(attribute);
	    removeButton.setAttributeNode(onclick); 
	    document.getElementById(ID).appendChild(removeButton);
	
}

function removeItem(ID, Name, Price){
	
	var quan = document.getElementById(ID+"a").textContent;
	quan = parseInt(quan);
	
	if(quan >1){
		
		quan--;
		document.getElementById(ID).innerHTML ="x "+ Name +"        	&pound;"+(quan*Price).toFixed(2)+" ";
	    var quantity = document.createElement("span");
		var quantityID = document.createAttribute("id");
		quantityID.value = ID+"a";
		quantity.setAttributeNode(quantityID);
		var quantityContent = document.createTextNode(quan);
		quantity.appendChild(quantityContent);
		document.getElementById(ID).insertBefore(quantity, document.getElementById(ID).childNodes[0]);
		
		addElement(ID, Name, Price);
	}
	
	else{
		var parent = document.getElementById("items");
		var child = document.getElementById(ID);
		parent.removeChild(child);


	}
	
	var sub_total = document.getElementById("subtId").textContent;
		sub_total = parseFloat(sub_total);
		sub_total = (sub_total-parseFloat(Price)).toFixed(2);
		document.getElementById("subtId").innerHTML = sub_total;

	
	if (document.getElementById("items").childNodes.length <=2){
		
		var parent = document.getElementById("items");
		var child = document.getElementById("subT");
		parent.removeChild(child);
		
		total = true;
		
	}
}

function addItem(Name, ID, Price) {
	if(document.getElementById(ID)==null){
	var node = document.createElement("P");
	var id = document.createAttribute("id");
	id.value = ID;
	node.setAttributeNode(id);
    var textnode = document.createTextNode("x "+Name +" £"+Price+" ");
    var quantity = document.createElement("span");
    var quantityID = document.createAttribute("id");
    quantityID.value = ID+"a";
    quantity.setAttributeNode(quantityID);
        var quantityClass = document.createAttribute("class");
    quantityClass.value = "";
    quantity.setAttributeNode(quantityClass);
    var quantityContent = document.createTextNode(1);
    quantity.appendChild(quantityContent);
    node.appendChild(quantity);
    node.appendChild(textnode);
    document.getElementById("items").insertBefore(node, document.getElementById("subT"));
    
    addElement(ID, Name, Price);
    
    }
    
    else{
	    
	    var quan = document.getElementById(ID+"a").textContent;
	    quan = parseInt(quan);
	    quan++;
	    document.getElementById(ID).innerHTML ="x "+ Name +"        	&pound;"+(quan*Price).toFixed(2); + " ";
	    var quantity = document.createElement("span");
		var quantityID = document.createAttribute("id");
		quantityID.value = ID+"a";
		quantity.setAttributeNode(quantityID);
		var quantityClass = document.createAttribute("class");
	    quantityClass.value = "";
	    quantity.setAttributeNode(quantityClass);
		var quantityContent = document.createTextNode(quan);
		quantity.appendChild(quantityContent);
		document.getElementById(ID).insertBefore(quantity, document.getElementById(ID).childNodes[0]);
		
		addElement(ID, Name, Price);
		
    
    }
    
    if(total == true){
			
			var subtotal = document.createElement("h3");
			var id = document.createAttribute("id");
			id.value = "subT";
			subtotal.setAttributeNode(id);
		    var textnode = document.createTextNode("Sub Total  	£ ");
		    subtotal.appendChild(textnode);

			var subT = document.createElement("span");
		    var subtId = document.createAttribute("id");
		    subtId.value = "subtId";
		    subT.setAttributeNode(subtId);
		    var subTContent = document.createTextNode(Price);
		    subT.appendChild(subTContent);
		    subtotal.appendChild(subT);
		    
		    document.getElementById("items").appendChild(subtotal); 
				       
		    total = false;
		    
		}
		
	else{
		
		var sub_total = document.getElementById("subtId").textContent;
		sub_total = parseFloat(sub_total);
		sub_total = (sub_total+parseFloat(Price)).toFixed(2);
		document.getElementById("subtId").innerHTML = sub_total;
		
	}




}

function setError(elm){
	elm.setAttribute("style","color:red");
};
						
function setCorrect(elm){
	 elm.setAttribute("style","color:black");
};

function validateRegister(form){
				var firstName=form.Fname.value.trim();
				var lastName=form.Lname.value.trim();
				var email=form.email.value.trim();
				var cemail=form.cemail.value.trim();
				var index=email.indexOf("@");
				var password=form.password.value.trim();
				var cpassword = form.cpassword.value.trim();
				var tel = form.tel.value.trim();
				var mobile = form.mobile.value.trim();
				var house = form.house.value.trim();
				var street = form.street.value.trim();
				var town = form.town.value.trim();
				var count = form.count.value.trim();
				var post = form.post.value.trim();
				
				var validated =true;
							
				if(firstName.length<=0){
				    setError(document.getElementById("Fname"));
				    validated=false;
				    }
							
				else{
				    setCorrect(document.getElementById("Fname"));
				    }
				    
				    
				if(lastName.length<=0){
				    setError(document.getElementById("Lname"));
				    validated=false;
				    }
							
				else{
				    setCorrect(document.getElementById("Lname"));
				    }
			       
				if(isNaN(firstName)){
				    setCorrect(document.getElementById("Fname"));
				}
				
				else{
				    setError(document.getElementById("Fname"));
				    validated=false;
				    }
				    
				if(isNaN(lastName)){
				    setCorrect(document.getElementById("Lname"));
				}
				
				else{
				    setError(document.getElementById("Lname"));
				    validated=false;
				    }
				
				if(email.length<=0){
				    setError(document.getElementById("email"));
				    validated=false;
				    }
				else{
				    setCorrect(document.getElementById("email"));
				    }
					
				if(index==-1){
				    setError(document.getElementById("email"));
				    validated=false;
				    }
				else{
				    setCorrect(document.getElementById("email"));
				    }
					
					if(cemail.length<=0){
				    setError(document.getElementById("cemail"));
				    validated=false;
				    }
				else{
				    setCorrect(document.getElementById("cemail"));
				    }
				if(password.length<=0){
				    setError(document.getElementById("password"));
				    validated=false;
				    }
							
				else{
				    setCorrect(document.getElementById("password"));
				    }
				if(cpassword.length<=0){
				    setError(document.getElementById("cpassword"));
				    validated=false;
				    }
							
				else{
				    setCorrect(document.getElementById("cpassword"));
				    }
				if(isNaN(tel)){
				    setError(document.getElementById("tel"));
				    validated=false;
				    }
							
				else{
				    setCorrect(document.getElementById("tel"));
				    }
				if(tel.length<=0){
				    setError(document.getElementById("tel"));
				    validated=false;
				    }		
				else{
				    setCorrect(document.getElementById("tel"));
				    }
				if(isNaN(mobile)){
				    setError(document.getElementById("mobile"));
				    validated=false;
				    }
							
				else{
				    setCorrect(document.getElementById("mobile"));
				    }
				if(mobile.length<=0){
				    setError(document.getElementById("mobile"));
				    validated=false;
				    }
							
				else{
				    setCorrect(document.getElementById("mobile"));
				    }
				    
				if(house.length<=0){
				    setError(document.getElementById("house"));
				    validated=false;
				    }
							
				else{
				    setCorrect(document.getElementById("house"));
				    }
				if(street.length<=0){
				    setError(document.getElementById("street"));
				    validated=false;
				    }
							
				else{
				    setCorrect(document.getElementById("street"));
				    }
				if(isNaN(street)){
				    setCorrect(document.getElementById("street"));
				}
				
				else{
				    setError(document.getElementById("street"));
				    validated=false;
				    }
				if(town.length<=0){
				    setError(document.getElementById("town"));
				    validated=false;
				    }
							
				else{
				    setCorrect(document.getElementById("town"));
				    }
				if(isNaN(town)){
				    setCorrect(document.getElementById("town"));
				}
				
				else{
				    setError(document.getElementById("town"));
				    validated=false;
				    }
				if(count.length<=0){
				    setError(document.getElementById("count"));
				    validated=false;
				    }
							
				else{
				    setCorrect(document.getElementById("count"));
				    }
				if(isNaN(count)){
				    setCorrect(document.getElementById("count"));
				}
				
				else{
				    setError(document.getElementById("count"));
				    validated=false;
				    }
				if(post.length<=0){
				    setError(document.getElementById("post"));
				    validated=false;
				    }
							
				else{
				    setCorrect(document.getElementById("post"));
				    }
				    
	return validated;
};

function validateSignIn(form){
	
	var validated =true;
	var userName=form.userName.value.trim();
	var password=form.password.value.trim();
				
	if(userName.length<=0){
		setError(document.getElementById("user"));
		validated=false;
		}
							
		else{
			setCorrect(document.getElementById("user"));
			}
				    
				    
	if(password.length<=0){
			setError(document.getElementById("pass"));
			validated=false;
			}
							
		else{
			setCorrect(document.getElementById("pass"));
			}
		   
	return validated;

}