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