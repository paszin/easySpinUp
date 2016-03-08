# easySpinUp

This is our submission for the San Francisco DeveloperWeek Hackathon 2016.

### Challenge Description

```This challenge is to create a scalable dev or test environment on NetApp's Cloud ONTAP for AWS data storage platform. You should use a CI/CD environment such as Jenkins, IDE (e.g. Eclipse, Visual Basic, etc.,) and/or other platforms, with NetApp technology as the underlying infrastructure. This challenge will be rated on how you take advantage of NetApp technology such as cloning (e.g. FlexClone) and/or replication (e.g. SnapMirror) to build an automated continuous integration platform.```


### Getting Started 
´´´npm install
bower install
grunt serve´´´. 
(make sure you have mongodb running on your hostsystem)

### Notes

Since the the AWS-Instances are not running anymore (obviously), we show some mocked data.

### Tipps when using the netapp-API
- The Authorization Endpoint can´t handle `OPTIONS´ Preflight. To overcome this issue, start chrome with some flags to disable this, or make the request from the backend (what we did)
