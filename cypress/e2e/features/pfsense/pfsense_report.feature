Feature: Download pfSense Config

    @pfSense
    Scenario: User Download report
        Given Go to pfsense ip: "192.168.1.235"
        When Go to the section for download report    
        When Go to "Diagnostics"-"Backup & Restore" and download the Config XML