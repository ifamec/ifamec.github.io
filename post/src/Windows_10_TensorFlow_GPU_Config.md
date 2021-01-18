# Windows 10 Tensorflow GPU Config

post @ 2017-07-14


Meet some problems during the configuration of Tensorflow-gpu.

Also resolve the problem that unable to install `scipy` with `numpy` in pip.

Non-original solution.

<!-- more -->

## Install Python 3.5.3
Install Python 3.5.3
```
python --version
pip --version
```
Test Installation _测试安装是否成功_

##Install Tensorflow-GPU

```
pip install --upgrade tensorflow-gpu
```

##Install CUDA CuDNN
Install CUDA8.0
Unzip CuDNN5.1 

Add `/CuDNN` and `/CuDNN/bin` to `Path` in Environment Variable

- 添加CuDNN目录到Path 环境变量
- 添加CuDnn\bin到Path环境变量

```
nvcc -V
```
Test Installation _测试CUDA安装是否成功_

__Done!__ __至此,安装结束__

```py
import tensorflow
```

Test Installation, or install `Microsoft Visual C++ 2015 Redistributable`

测试是否安装成功,如报错确认是否安装`Microsoft Visual C++ 2015 Redistributable`

# Python 3.5 pip cannot install scipy
uninstall existing numpy

[Install numpy + mkl](http://www.lfd.uci.edu/~gohlke/pythonlibs/#numpy)

[Install scipy](http://www.lfd.uci.edu/~gohlke/pythonlibs/#scipy)