```
python/ruby one line web server
sudo ruby -rwebrick -e'WEBrick::HTTPServer.new(:Port => 80, :DocumentRoot => Dir.pwd).start'
sudo python3 -m http.server 80
```


* Neden bir Javascript frameworkü?
* AngularJs nedir?
    - AngularJs'in felsefesi
    - MVC (MVW) nedir?
		- AngularJs neleri çözmez?
AngularJs'in sundukları
	- iki yönlü veri bağlama
	- Module kavramı
	- Dependency Injection
	- Scope kavramı
* AngularJs'in MVC kullanımı
	- Model
	    - `$resource`
	- View
	    - Data Binding
	    - Interpolation
	- Controller
* DOM etkileşimi ve directive kavramı
* AngularJs ve testler
* Sık yapılan hatalar
		- jQuery'den gelenler için