<div class="navbar navbar-default  navbar-fixed-top col-md-12 col-lg-12 col-sm-12 col-xs-12">
	<div class="logo"><!-- This the container div start -->	
		<a href="index.php" class="col-md-2 col-lg-2 col-sm-4 col-xs-5 botm10 col-md-offset-1  top10"><img src="images/logo.png" alt="Four Oaks Tandoori Logo"></a>
		<button class="navbar-toggle" data-toggle ="collapse" data-target= ".navHedaerCollapse">	
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		</button>
	</div>

	<div class="col-md-4 col-sm-8 col-xs-12 rest_name_tel"><!-- This the container div start-->
		<h1 class="text_center restName collapse navbar-collapse navHedaerCollapse">Four Oaks Tandoori</h1>
		<h3 class="text_center tel collapse navbar-collapse navHedaerCollapse">0121 30 888 05</h3>
	</div>
	
	
	
	
	<div class="container col-md-4 top20 col-sm-12 col-xs-12 menu">	
			
		<!-- To mak this part of the menu to get collaspe when we view that in mobile devices -->
		<div class="collapse navbar-collapse navHedaerCollapse">
			<ul class="nav navbar-nav text_center">
							
			<!-- move active class depend on the page title -->
			<li class="<?php if($page=='index.php'){echo'active';}?>"><a href="index.php">Home</a></li>
			
			<!-- move active class depend on the page title -->
			<li class="<?php if($page=='about.php'){echo'active';}?>"><a href="about.php">About Us</a></li>
			
			<!-- move active class depend on the page title -->
			<li class="<?php if($page=='menu.php'){echo'active';}?>"><a href="menu.php">Menu</a></li>

					
			<!-- move active class depend on the page title -->
			<li class="<?php if($page=='#'){echo'active';}?>"><a href="contact.php">Contact</a></li>
			
			
			
			
			

		</div><!-- This the container div end tag-->
	</div>
</div><!-- This the navbar div end tag-->