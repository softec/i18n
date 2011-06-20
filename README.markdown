i18n
====

#### A Javascript Localisation Library ####

i18n is a small and efficient Javascript Library that aims to ease
the translations of strings, dates and numbers into the browser locale.
It offers a simple API to control the dynamic loading of appropriates
locales using our [ApiLoader Javascript Library](http://github.com/softec/apiloader/) library 
and very short function to easily translate strings, dates and numbers.

### Targeted platforms ###

i18n is expected to work on any Javascript 1.2 compliant browser and
has been tested on the following platforms:

 * Chrome 6 and higher
 * Apple Safari 3 and higher
 * Mozilla Firefox 2 and higher
 * Microsoft Internet Explorer for Windows, version 6 and higher
 * Opera 10 and higher

Using i18n
---------------

To use i18n in your application, you may download the latest release
from our [Maven Repository](http://nexus.softec.lu:8081/service/local/repositories/opensource/content/lu/softec/js/i18n/1.0/i18n-1.0-compressed.jar)
and extract i18n.js to a suitable location. You also need to deploy our [ApiLoader Javascript Library](http://github.com/softec/apiloader/)
as described on its own repository.
Then include i18n.js early in your HTML like so:

    <script type="text/javascript" src="/path/to/i18n.js"></script>

You may also reference it directly in your maven build, when using
maven-javascript-plugin, using the following dependency:

    <dependency>
      <groupId>lu.softec.js</groupId>
      <artifactId>i18n</artifactId>
      <version>1.0</version>
      <type>javascript</type>
      <scope>runtime</scope>
    </dependency>

Transitive dependency with ApiLoader will then be managed properly.

### Building i18n from source ###

The build is based on Maven, using our modified maven-javascript-plugin.

Contributing to i18n
-------------------------

Fork our repository on GitHub and submit your pull request.

Documentation
-------------

The documentation has yet to be written

License
-------

Currently, i18n by [SOFTEC sa](http://softec.lu) is license under
a [Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Luxembourg License](http://creativecommons.org/licenses/by-nc-nd/3.0/lu/)
The license will be relaxed to a more common open-source license allowing
derivative works and commercial usages in the future.
If you need such license right now, please [contact us](mailto:support@softec.lu)
with an description of your expect usage, and we will propose you an
appropriate agreement on a case by case basis.
