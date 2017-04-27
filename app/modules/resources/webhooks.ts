/*
 * Copyright (C) 2014-2017 Taiga Agile LLC <taiga@taiga.io>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 * File: webhooks.coffee
 */

import {Injectable} from "@angular/core"
import {RepositoryService} from "../../ts/modules/base/repository"
import {UrlsService} from "../../ts/modules/base/urls"
import {HttpService} from "../../ts/modules/base/http"

@Injectable()
export class WebhooksResource {
    constructor(private repo: RepositoryService,
                private urls: UrlsService,
                private http: HttpService) {}

    list(projectId) {
        let params = {project: projectId};
        return this.repo.queryMany("webhooks", params);
    };

    test(webhookId) {
        let url = this.urls.resolve("webhooks-test", webhookId);
        return this.http.post(url);
    };
};