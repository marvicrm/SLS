/**
 * Simple Loading Screen 
 *
 * @author Marvic R. Macalintal
 * @version v1.0.0
 */
 var sls = {
	begin : function(text) {
		this.e = Math.random();
		let blocker = document.createElement('div');
		blocker.innerHTML = text;
		blocker.setAttribute('id',this.e);
		blocker.setAttribute('style',this.css()['blocker_css']);
		document.body.setAttribute('style',this.css()['body_css']);
		document.body.appendChild(blocker);
	},
	end : function(text='') {
		let element = document.getElementById(this.e);
		element.innerHTML = text;
		setTimeout(function(){
			document.body.removeChild(element);
		},1500);
	},
	// blocker css styling
	css : function() {
		let style = {
			'blocker_css'	:	`color:#fff;font-size:25px;background:#000;opacity:0.8;
						position:absolute;height:100%;width:100%;left:0px;top:0px;
						text-align:center;padding-top:20%;z-index:999999999999999`,
			'body_css'	:	`overflow:hidden;`
		}
		return style;
	} 
 }
