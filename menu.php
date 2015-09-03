<?php
	
	include_once 'includes/header.php';
	include_once 'includes/db.php';
	include_once 'classes/Category.class.php';
?>

	<div class="container col-md-12 col-sm-12">
		<div class="col-md-2 col-sm-4 col-md-offset-1">
			<h3 class="text-center"><u>Categories</u></h3>
			
			<?php 
				$categories = $conn->query("SELECT* FROM Category ORDER BY ID");
				
				if($categories->num_rows >0){
					while($category =$categories->fetch_assoc()){
						$name = "category".$category["ID"];
						echo "<a href='#".$name."'><h5 class='col-md-10 btn btn-info mar_top'>".$category["Name"]."</h5></a>"."<br/>";
					}
				}else{
					echo "No categories found  ";
				}
			?>
			
		</div>

		<div class="container col-md-6">
			
			<?php
				$categories = $conn->query("SELECT* FROM Category ORDER BY ID");
				while($category= $categories->fetch_object("Category")){

					$category->listItems();
				}
				
			
			?>

		</div>
	
		<div class="container col-md-3 text-center">
			<h3><u>Shopping Chart</u></h3>
			<div class="text-left" id = "items">
			</div>
			<a href="sign_in.php"><p class="btn btn-primary col-md-10 col-md-offset-1 col-sm-12 col-xs-12">Continue</p></a>
			
		</div>
</div>




<?php
	
	include_once 'includes/footer.php';
?>



