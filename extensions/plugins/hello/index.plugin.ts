/*
 * Copyright © 2024 Hexastack. All rights reserved.
 *
 * Licensed under the GNU Affero General Public License v3.0 (AGPLv3) with the following additional terms:
 * 1. The name "Hexabot" is a trademark of Hexastack. You may not use this name in derivative works without express written permission.
 * 2. All derivative works must include clear attribution to the original creator and software, Hexastack and Hexabot, in a prominent location (e.g., in the software's "About" section, documentation, and README file).
 */

import { Injectable } from '@nestjs/common';

import { Block } from 'hexabot/src/chat/schemas/block.schema';
import { Context } from 'hexabot/src/chat/schemas/types/context';
import {
  OutgoingMessageFormat,
  StdOutgoingTextEnvelope,
} from 'hexabot/src/chat/schemas/types/message';
import { PluginService } from 'hexabot/src/plugins/plugins.service';
import { PluginBlockTemplate } from 'hexabot/src/plugins/types';
import { BaseBlockPlugin } from 'hexabot/src/plugins/base-block-plugin';

import SETTINGS from './settings';

@Injectable()
export class HelloPlugin extends BaseBlockPlugin<typeof SETTINGS> {
  template: PluginBlockTemplate = { name: 'Hello Plugin' };

  constructor(pluginService: PluginService) {
    super('hello-plugin', pluginService);
  }

  getPath(): string {
    return __dirname;
  }

  async process(block: Block, context: Context, _convId: string) {
    const args = this.getArguments(block);

    const envelope: StdOutgoingTextEnvelope = {
      format: OutgoingMessageFormat.text,
      message: {
        text: args.message,
      },
    };

    return envelope;
  }
}
