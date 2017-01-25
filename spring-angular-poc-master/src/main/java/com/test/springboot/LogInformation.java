package com.test.springboot;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LogInformation {
	@JsonProperty("businessId")
	private List<Integer> businessId;
	private List<String> transactionId;
	private List<String>status;
	private List<Integer> applicationId;
	private List<String> serviceName;
	private List<String> hostName;
	private List<String> logid;
	
	public List<Integer> getBusinessId() {
		return businessId;
	}
	public void setBusinessId(List<Integer> businessId) {
		this.businessId = businessId;
	}
	public List<String> getTransactionId() {
		return transactionId;
	}
	public void setTransactionId(List<String> transactionId) {
		this.transactionId = transactionId;
	}
	public List<String> getStatus() {
		return status;
	}
	public void setStatus(List<String> status) {
		this.status = status;
	}
	public List<Integer> getApplicationId() {
		return applicationId;
	}
	public void setApplicationId(List<Integer> applicationId) {
		this.applicationId = applicationId;
	}
	public List<String> getServerName() {
		return serviceName;
	}
	public void setServerName(List<String> serverName) {
		this.serviceName = serverName;
	}
	public List<String> getHostName() {
		return hostName;
	}
	public void setHostName(List<String> hostName) {
		this.hostName = hostName;
	}
	public List<String> getLogid() {
		return logid;
	}
	public void setLogid(List<String> logid) {
		this.logid = logid;
	}

}
