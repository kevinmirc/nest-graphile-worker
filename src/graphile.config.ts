import type {} from "graphile-config";
import type {} from "graphile-worker";

import * as dotenv from 'dotenv';

dotenv.config({ path: ['../.env.local', '../.env'] })

const preset: GraphileConfig.Preset = {
  worker: {
    connectionString: process.env.DATABASE_URL,
    maxPoolSize: 10,
    pollInterval: 1000,
    preparedStatements: true,
    schema: 'graphile_worker',
    crontabFile: '../crontab',
    concurrentJobs: 2,
    fileExtensions: ['.js'],
  },
};

export default preset;
