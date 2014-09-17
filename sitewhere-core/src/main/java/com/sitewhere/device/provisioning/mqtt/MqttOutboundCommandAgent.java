/*
 * MqttOutboundCommandAgent.java 
 * --------------------------------------------------------------------------------------
 * Copyright (c) Reveal Technologies, LLC. All rights reserved. http://www.reveal-tech.com
 *
 * The software in this package is published under the terms of the CPAL v1.0
 * license, a copy of which has been included with this distribution in the
 * LICENSE.txt file.
 */
package com.sitewhere.device.provisioning.mqtt;

import com.sitewhere.device.provisioning.OutboundCommandAgent;
import com.sitewhere.spi.device.provisioning.ICommandDeliveryParameterExtractor;
import com.sitewhere.spi.device.provisioning.IOutboundCommandAgent;

/**
 * Implementation of {@link IOutboundCommandAgent} that encodes and delivers messages that
 * are byte arrays.
 * 
 * @author Derek
 */
public class MqttOutboundCommandAgent extends OutboundCommandAgent<byte[], MqttParameters> {

	/** Placeholder for extractor */
	private ICommandDeliveryParameterExtractor<MqttParameters> extractor = new MqttParameters.Extractor();

	/*
	 * (non-Javadoc)
	 * 
	 * @see com.sitewhere.device.provisioning.OutboundCommandAgent#
	 * getCommandDeliveryParameterExtractor()
	 */
	@Override
	public ICommandDeliveryParameterExtractor<MqttParameters> getCommandDeliveryParameterExtractor() {
		return extractor;
	}
}