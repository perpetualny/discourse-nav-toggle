// Discourse.TopicView.reopen({
// 	didInsertElement : function(){
// 		this._super();
// 		Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
// 	},
// 	afterRenderEvent : function(){
// 		var btn = document.createElement('li');
// 		btn.setAttribute('id','947');
// 		btn.setAttribute('class','ember-view');
// 		btn.setAttribute('title','Toggle btn');

// 		var btnlink = document.createElement('a');
// 		btnlink.setAttribute('href','#');
// 		btnlink.setAttribute('onclick',"if(document.getElementsByClassName('d-header')[0].style.display == 'none'){document.getElementsByClassName('d-header')[0].style.display = 'inherit'; document.getElementById('main-outlet').style['padding-top'] = '82px';} else {document.getElementsByClassName('d-header')[0].style.display = 'none'; document.getElementById('main-outlet').style['padding-top'] = '22px';}");

// 		var newtext = document.createTextNode('Toggle Nav');
// 		btnlink.appendChild(newtext);
// 		btn.appendChild(btnlink);


// 		setTimeout(function(){
// 			document.getElementById('ember917').appendChild(btn);
// 		}, 3000);

// 		function togglenav(){
// 			document.getElementsByClassName('d-header').style.display = 'visible';
// 		};
// 		console.log('This is a sample Plugin');
// 	}
// });


	Discourse.ExternalNavItem = Discourse.NavItem.extend({
	href : function() {
		return this.get('href');
	}.property('href')
	});

	I18n.translations.de.js.filters.google = { title: "Google", help: "Google" };

	Discourse.NavItem.reopenClass({
	buildList : function(category, args) {
		var list = this._super(category, args);
		list.push(Discourse.ExternalNavItem.create({href: 'http://www.google.com', name: 'google'}));
		return list;
	}
	});



// var btn = document.createElement('li');
// btn.setAttribute('id','947');
// btn.setAttribute('class','ember-view');
// btn.setAttribute('title','Toggle btn');

// var btnlink = document.createElement('a');
// btnlink.setAttribute('href','#');
// btnlink.setAttribute('onclick',"if(document.getElementsByClassName('d-header')[0].style.display == 'none'){document.getElementsByClassName('d-header')[0].style.display = 'inherit'; document.getElementById('main-outlet').style['padding-top'] = '82px';} else {document.getElementsByClassName('d-header')[0].style.display = 'none'; document.getElementById('main-outlet').style['padding-top'] = '22px';}");

// var newtext = document.createTextNode('Toggle Nav');
// btnlink.appendChild(newtext);
// btn.appendChild(btnlink);


// setTimeout(function(){
// 	document.getElementById('ember917').appendChild(btn);
// }, 3000);

// function togglenav(){
// 	document.getElementsByClassName('d-header').style.display = 'visible';
// };

// (function($) {
// 	console.log('This is a sample plugin');
// })(jQuery);