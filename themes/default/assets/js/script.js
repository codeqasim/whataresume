var ts = new TwoStep({
    elements: document.querySelectorAll('.parent .narrative-item'),
    onChange: function(event) {
        console.log('Item '+event.index);
    },
    stick: document.querySelector('.parent .rightcol'),
    narrative: [
        function(event) {
            $('.parent .chart').text('Item '+event.index);
			$(".core-details1").fadeIn();
			
        },
        function(event) {
            $('.parent .chart').text('Item '+event.index);
			
		
        },
        function(event) {
            $('.parent .chart').text('Item '+event.index);
		$(".core-details2").fadeIn();
			
        },
		function(event) {
            $('.parent .chart').text('Item '+event.index);
		
			
        },
		function(event) {
            $('.parent .chart').text('Item '+event.index);  
			$(".core-details3").fadeIn();
			
        },
		function(event) {
            $('.parent .chart').text('Item '+event.index);
			
			
        },
		function(event) {
            $('.parent .chart').text('Item '+event.index);
			$(".core-details4").fadeIn();
			
        },
		function(event) {
            $('.parent .chart').text('Item '+event.index);
			
				
        },
		function(event) {
            $('.parent .chart').text('Item '+event.index);
			$(".core-details5").fadeIn();
			
        },
        function(event) {
            $('.parent .chart').text('Item '+event.index);
		
			
        }
    ]
});

