<template>
	<div class="card">
		<div>
			<div>
				<div class="card-content">
					<div class="content">
						<div class="field">
							<label class="label">{{ $t('common.NEW_EMAIL') }}</label>
							<div class="control">
								<input data-cy="newEmail" class="input" name="newEmail" v-model="newEmail" />
							</div>
						</div>
						<div class="field">
							<label class="label">{{ $t('common.PASSWORD') }}</label>
							<div class="control">
								<input data-cy="confirmPassword" type="password" class="input" name="password" v-model="password" />
							</div>
						</div>
					</div>
				</div>

				<div class="error mt-3" v-if="logonError">
					<p>⚠️ <span v-html="logonError"></span></p>
				</div>

				<div class="mt-5">
					<button
						class="button is-green big-button is-login transition-faster"
						data-cy="updateEmailButton"
						:disabled="!newEmail || !password"
						@click="
							setNewData({
								email: newEmail,
								password: password
							})
						"
					>
						<span class="text confirm-button">{{ $t('common.UPDATE_EMAIL') }}</span>
					</button>
					<button
						v-on:click="$router.push('/settings?email_password=true').catch(() => undefined)"
						tag="button"
						class="button is-ghost is-blue big-button medium-text transition-faster"
					>
						<span class="text">{{ $t('common.CANCEL') }}</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { validateInput } from '../utils/backupRestore';
import { sha256 } from '../utils/cryptoFunctions';

import Component, { mixins } from 'vue-class-component';
import { Authenticated, Global } from '../mixins/mixins';
import { Emit, Prop, Watch } from 'vue-property-decorator';

@Component({})
export default class ChangeEmail extends mixins(Global, Authenticated) {
	newEmail = '';
	password = '';
	logonError = '';

	@Prop()
	error!: string;

	@Watch('error')
	handleErorrChange(newValue: string) {
		if (newValue) this.logonError = newValue;
	}

	@Emit('setNewData')
	async setNewData(data: any) {
		this.logonError = '';

		if (!data.email) {
			return { email: null, password: null };
		}

		const emailMessage = await validateInput('email', data.email);

		if (emailMessage) {
			this.logonError = emailMessage;
			return { email: null, password: null };
		}

		const newPassword = await sha256(data.password);

		if (this.store.hashedPassword !== newPassword) {
			this.logonError = this.$t('errors.WRONG_PASSWORD').toString();
			return { email: null, password: null };
		}

		if (this.store.email === this.newEmail) {
			this.logonError = this.$t('errors.SAME_EMAIL').toString();
			return { email: null, password: null };
		}

		return { email: data.email, password: newPassword };
	}
}
</script>

<style lang="scss" scoped>
.confirm-button {
	font-size: 18px;
}
</style>
