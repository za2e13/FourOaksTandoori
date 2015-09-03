<?php

	class Category{
		
		public $ID;
		public $Name;
		
	
		public function listItems(){
			require 'includes/db.php';
			$items = $conn->query("SELECT* FROM Item WHERE Category_ID = '$this->ID'");
				echo "<a name = 'category$this->ID'><h3 class='text-center'>$this->Name </h3></a>";
				while($item = $items->fetch_object()){
														
							echo "
							<h4 class='col-md-12'>
							<span class='col-md-1'>".$item->ID."</span> 
							<span class='col-md-6'>".$item->Name."</span> 
							<span class='col-md-3'>".$item->Price."</span>" ?>
							<span class='btn btn-primary glyphicon glyphicon-plus' onclick="addItem('<?php echo $item->Name;?>', '<?php echo $item->ID; ?>', '<?php echo $item->Price; ?>');"></span>
				
						<?php
							
							echo"
							<p class='col-md-10 text-left'>".$item->Description."</p>
							</h4><hr/ class='col-md-11'>";
				}
				
		}
	}

?>