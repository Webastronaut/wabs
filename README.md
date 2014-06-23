waccordeon
==========

Yet another accordeon plugin. Needs jQuery to work properly.

## Usage

### Example markup

```html
<ul class="accordeon">
	<li>
		<section>
			<h2 id="foo">Lorem ipsum dolor sit amet lorem ipsum dolor sit amet</h2>
			<div>
				<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>

				<p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>

				<p>Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
			</div>
		</section>
	</li>
	<li>
		<section>
			<h2 id="bar">Dolor sit amet lorem ipsum dolor sit amet</h2>
			<div>
				<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>

				<p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>

				<p>Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
			</div>
		</section>
	</li>
</ul>
```

You may have recognized that the accordeon headers have an id assigned to them, e.g. ```id="foo"```. Its purpose is to make the separate accordeon items accessable via URLs. The plugin will check if one of the items has the same id as the given URL hash and will open it.


### Example invocation
```js
$(function() {
	$('.accordeon').waccordeon({
		$accordeonHeader : $(this).find('section > h2'),
		$accordeonContents : $(this).find('section > div')
	});
});
```

## Options

| Option | Type | Default | Description |
| ------------- | ------------- | ------------- | ------------- |
| ```$accordeonHeader``` | ```object``` | ```''``` | Represents the set of accordeon headers as jQuery object |
| ```$accordeonContents``` | ```object``` | ```''``` | The set of accordeon content elements as jQuery object |
| ```activeClass``` | ```string``` | ```active``` | The class to be assigned to the opened item |
| ```offsetToAccordeonHeader``` | ```int``` | ```10``` | The offset to the header of the opened items' header after scrolling |
| ```animationDuration``` | ```int``` | ```200``` | The duration of the slideup/-down animation |
| ```scrollSpeed``` | ```int``` | ```200``` | The speed in which the document will scroll to the opened item |
| ```initActive``` | ```int``` | ```0``` | The index of the opened item if ```openFirstItem``` option ist ```true``` |
| ```openFirstItem``` | ```boolean``` | ```false``` | Set this to ```true``` if you want the first item to be opened on page load |
