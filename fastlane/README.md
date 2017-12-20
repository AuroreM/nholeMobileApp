fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

## Choose your installation method:

| Method                     | OS support                              | Description                                                                                                                           |
|----------------------------|-----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| [Homebrew](http://brew.sh) | macOS                                   | `brew cask install fastlane`                                                                                                          |
| Installer Script           | macOS                                   | [Download the zip file](https://download.fastlane.tools). Then double click on the `install` script (or run it in a terminal window). |
| RubyGems                   | macOS or Linux with Ruby 2.0.0 or above | `sudo gem install fastlane -NV`                                                                                                       |

# Available Actions
### check_git_status
```
fastlane check_git_status
```

### set_js_env
```
fastlane set_js_env
```


----

## iOS
### ios setup
```
fastlane ios setup
```

### ios setup_push
```
fastlane ios setup_push
```

### ios build
```
fastlane ios build
```

### ios deploy_hockey
```
fastlane ios deploy_hockey
```

### ios deploy_mobileCenter
```
fastlane ios deploy_mobileCenter
```

### ios deploy
```
fastlane ios deploy
```

### ios deploy_local
```
fastlane ios deploy_local
```


----

## Android
### android build
```
fastlane android build
```

### android deploy_hockey
```
fastlane android deploy_hockey
```

### android deploy_mobileCenter
```
fastlane android deploy_mobileCenter
```

### android deploy
```
fastlane android deploy
```

### android deploy_local
```
fastlane android deploy_local
```


----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
