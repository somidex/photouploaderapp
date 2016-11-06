<!doctype html>
<html class="no-js" lang="">
<head>
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<title>ProjectName | PageName</title>
<meta name="description" content="">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

<link rel="stylesheet" href="css/style.css" media="all"/>

<script src="js/html5.js"></script>
</head>
<body>
<section id="main-container">
	<header></header>
	<div class="intro-mainwrapper">
		<div class="intro-text">
			<h2>Uratex Photo Contest</h2>
			<p>The best way to see San Diego is aboard a Flagship cruise and as our guest, you have a front row seat. Capture once-in-a-lifetime sights and enter to win either a 3-course dinner cruise for two or six tickets for a Patriot Jet Boat thrill ride by sharing your photos on Facebook, Twitter or Instagram using #FlagshipSD. Enter Now!</p>
		</div>
		<div class="banner-img"><img src="images/page_template/banner.jpg" alt=""></div>
		<div class="form-wrapper">
			<form method="post" id="uploadForm" action="" enctype="multipart/form-data">
				<div class="input-wrap">
					<label>Upload a Photo</label>
					<div class="file-field input-field">
						<div class="btn">
							<span>Choose File</span>
							<input type="file" name="screenshot" id="screenshot" value="" />
						</div>
							<!-- <div class="file-path-wrapper">
							<input class="file-path validate" type="text">
						</div> -->
					</div>
				</div>	
				<div class="input-wrap">
					<label>Include a Caption for your Photo :</label>
					<textarea id="caption" colspan="6" rowspan="6" name="limitedtextarea" onKeyDown="limitText(this.form.limitedtextarea,this.form.countdown,250);"  onKeyUp="limitText(this.form.limitedtextarea,this.form.countdown,250);"></textarea>
					<p class="caption-info">(Maximum characters: 250) <span class="limit-field">You have <input readonly type="text" name="countdown" size="3" value="250"> characters left.</span></p>
				</div>
				<h3>May be used to contact you if you win!</h3>
				<div class="divider">
					<div class="input-wrap half">
						<label>Name :</label>
						<input type="text" name="" id="name">
					</div>
					<div class="input-wrap half">
						<label>Email Address :</label>
						<input type="email" name="" id="email">
					</div>
				</div>
				<div class="divider">
					<div class="input-wrap half">
						<label>Contact Number :</label>
						<input type="tel" name="" id="contact">
					</div>
				</div>
				<div class="input-wrap text-center"> 
					<input type="submit" class="btn" name="" value="Submit" id="submit">
				</div>
			</form>
		</div>
	</div>

</section>
<footer></footer>
<script src="js/lib/jquery.min.js"></script>
<script src="js/imagesloaded.pkgd.js"></script>
<script src="js/isotope.pkgd.min.js"></script>
<script src="js/jquery.appear.js"></script>
<script src="js/plugins.js"></script>
<script src="js/custom.js"></script>

<script type="text/javascript">
    function limitText(limitField, limitCount, limitNum) {
        if (limitField.value.length > limitNum) {
            limitField.value = limitField.value.substring(0, limitNum);
        } else {
            limitCount.value = limitNum - limitField.value.length;
        }
    }

	$('#submit').click(function(e) {
		e.preventDefault();

		if (confirm('Submit entry?')) {
			var formInput = document.getElementById('screenshot');

			var formData = new FormData();
			formData.append('name', $('#name').val());
			formData.append('email', $('#email').val());
			formData.append('contact', $('#contact').val());
			formData.append('caption', $('#caption').val());
			formData.append('screenshot', formInput.files[0]);

			$.ajax({
				url : 'process-form.php', 
				type : 'POST',
				data : formData,
				processData: false, // tell jQuery not to process the data
				contentType: false, // tell jQuery not to set contentType
				success : function(data) { 
					console.log(data);
				}
			});
		}
	});
</script>
</body>
</html>
